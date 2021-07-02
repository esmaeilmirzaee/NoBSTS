import {
    ChangeEvent,
    FormEvent,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
} from 'react';
import { Component } from 'react';

var searchExt = '';

window['SetSearchExt'] = function (ext: string) {
    searchExt = ext;
};

var lastRequest: XMLHttpRequest | undefined;
function fetch(input: string, cb: (data: any[]) => void, errCb?: Function) {
    if (lastRequest) {
        lastRequest.abort();
    }

    if (input === '') {
        setTimeout(function () {
            cb([]);
        }, 0);
        return;
    }

    var request: XMLHttpRequest | null = new XMLHttpRequest();
    request.open(
        'GET',
        '/api/suggestions.ashx?input=' + encodeURIComponent(input),
        true,
    );

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.responseText);
                cb(data);
            } else {
                errCb?.(this);
            }
        }
    };

    request.send();
    lastRequest = request;
    request = null;
}

function getInstrument(ticker: string) {
    if (ticker.indexOf('@') === 0) {
        ticker = ticker.substring(1);

        var cryptos = [
            'BTCUSD',
            'LTCUSD',
            'ETHUSD',
            'XRPUSD',
            'BCHUSD',
            'BTCEUR',
            'LTCEUR',
            'ETHEUR',
            'XRPEUR',
            'BCHEUR',
            'LTCBTC',
            'ETHBTC',
            'XRPBTC',
            'BCHBTC',
        ];

        if (cryptos.indexOf(ticker) !== -1) {
            return 'crypto';
        } else if (ticker.length === 6) {
            return 'forex';
        } else {
            return 'futures';
        }
    }
    return 'stock';
}

function getRedirectUrl(ticker: string) {
    var url = '';
    var instrument = getInstrument(ticker);
    if (
        instrument === 'crypto' ||
        instrument === 'forex' ||
        instrument === 'futures'
    ) {
        ticker = ticker.substring(1);
        url = `/${instrument}_charts.ashx?t=`;
    } else {
        url = '/quote.ashx?t=';
        ticker = ticker.replace(/\./g, '-');
        ticker = ticker.replace(/ /g, ',');
        ticker = ticker.replace(/,,/g, ',');
        if (ticker.charAt(0) === ',') {
            ticker = ticker.substr(1);
        }
    }
    return url + encodeURIComponent(ticker) + searchExt;
}

interface SearchProps {
    focus?: boolean;
}

interface SearchState {
    input: string;
    highlight: string;
    data: any[];
    focused: boolean;
    selected: number;
}

class Search extends Component<SearchProps, SearchState> {
    state: SearchState = {
        input: '',
        highlight: '',
        data: [],
        focused: false,
        selected: -1,
    };

    render() {
        var focus = !!this.props.focus;
        return (
            <div>
                <Input
                    onChange={this._onChange}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    onArrowUp={this._onArrowUp}
                    onArrowDown={this._onArrowDown}
                    value={this.state.input}
                    focus={focus}
                />
                <SuggestionsBox
                    input={this.state.input}
                    highlight={this.state.highlight}
                    data={this.state.data}
                    selected={this.state.selected}
                    focused={this.state.focused}
                />
            </div>
        );
    }

    _onChange = (value: string) => {
        fetch(
            value,
            function (data: any[]) {
                // @ts-ignore - @REFACTOR
                this.setState({ data: data, highlight: value });
            }.bind(this),
        );
        this.setState({ input: value, selected: -1 });
    };

    _onFocus = () => {
        this.setState({ focused: true });
    };

    _onBlur = () => {
        this.setState({ focused: false });
    };

    _onArrowUp = () => {
        if (this.state.selected > 0) {
            var selected = this.state.selected - 1;
            this.setState({
                selected: selected,
                input: this.state.data[selected].ticker,
            });
        }
    };

    _onArrowDown = () => {
        if (this.state.selected < this.state.data.length - 1) {
            var selected = this.state.selected + 1;
            this.setState({
                selected: selected,
                input: this.state.data[selected].ticker,
            });
        }
    };
}

interface InputProps {
    value: string;
    focus: boolean;
    onChange: (value: string) => void;
    onFocus: Function;
    onBlur: Function;
    onArrowUp: Function;
    onArrowDown: Function;
}

interface InputState {
    firstFocus: boolean;
    placeholderSupported: boolean;
}

class Input extends Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);

        var placeholderSupported =
            document.createElement('input').placeholder !== undefined;
        this.state = { firstFocus: true, placeholderSupported };
    }

    render() {
        const placeholderText = 'Search ticker, company or profile';
        var value = this.props.value;
        return (
            <form onSubmit={this._onSubmit}>
                <input
                    placeholder={placeholderText}
                    type='text'
                    ref='input'
                    value={value}
                    className={value !== '' ? 'is-focused' : ''}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                    onKeyUp={this._onKeyUp}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                />
                <span className='fa fa-search' onClick={this._onSubmit}></span>
            </form>
        );
    }

    _onChange = (e: ChangeEvent) => {
        e.preventDefault();
        // @ts-ignore - @REFACTOR
        var value = this.refs.input.value;
        this.props.onChange(value);
    };

    _onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // @ts-ignore - @REFACTOR
        window.location = getRedirectUrl(this.props.value);
    };

    _onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
        }
    };

    _onFocus = (e: FocusEvent) => {
        this.props.onFocus(e);
    };

    _onBlur = (e: FocusEvent) => {
        this.props.onBlur(e);
    };

    _onKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.props.onArrowUp();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.props.onArrowDown();
        }
    };

    componentDidMount() {
        this._focus();
    }

    componentDidUpdate() {
        this._focus();
    }

    _focus() {
        if (this.props.focus && this.state.firstFocus && !this._isMobile()) {
            // @ts-ignore - @REFACTOR
            this.refs.input.focus();
            this.setState({ firstFocus: false });
        }
    }

    _isMobile() {
        return (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        );
    }
}

interface SuggestionsBoxProps {
    data: any[];
    input: string;
    focused: boolean;
    highlight: string;
    selected: number;
}

class SuggestionsBox extends Component<SuggestionsBoxProps> {
    render() {
        var data = this.props.data;
        var searchLink =
            '/search.ashx?p=' + encodeURIComponent(this.props.input);
        return (
            <table
                className='suggestions-box'
                style={{
                    display:
                        this.props.focused &&
                        (data.length > 0 || this.props.highlight.length > 2)
                            ? 'table'
                            : 'none',
                }}
                cellPadding='0'
                cellSpacing='0'
                // @ts-ignore - @REFACTOR
                border='0'
            >
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <tr
                                onMouseDown={this._onClick.bind(
                                    this,
                                    row.ticker,
                                )}
                                className={
                                    index === this.props.selected
                                        ? 'active'
                                        : ''
                                }
                                key={row.ticker}
                            >
                                <td
                                    className='ticker'
                                    dangerouslySetInnerHTML={{
                                        __html: this._formatTicker(row.ticker),
                                    }}
                                />
                                <td
                                    className='company'
                                    dangerouslySetInnerHTML={{
                                        __html: this._formatCompany(
                                            row.company,
                                        ),
                                    }}
                                />
                                <td className='exchange'>{row.exchange}</td>
                            </tr>
                        );
                    })}
                    {this.props.highlight.length > 0 && (
                        <tr className='links'>
                            <td colSpan={3}>
                                <table
                                    width='100%'
                                    cellPadding='0'
                                    cellSpacing='0'
                                    // @ts-ignore - @REFACTOR
                                    border='0'
                                >
                                    <tbody>
                                        <tr>
                                            <td width='100%'>
                                                <a
                                                    // @ts-ignore - @REFACTOR
                                                    onMouseDown={() =>
                                                        (window.location =
                                                            searchLink)
                                                    }
                                                    className='search-company'
                                                >
                                                    Search
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    _onClick(ticker: string, e: MouseEvent) {
        if (e.button === 0) {
            // @ts-ignore - @REFACTOR
            window.location = getRedirectUrl(ticker);
        }
    }

    _formatTicker(ticker: string) {
        var hightlight = this.props.highlight.toUpperCase();
        return ticker.replace(hightlight, '<b>' + hightlight + '</b>');
    }

    _formatCompany(text: string) {
        var input = this.props.highlight;
        var re = new RegExp(this._escapeRegExp(input), 'gi');
        return text.replace(re, function (match) {
            return '<b>' + match + '</b>';
        });
    }

    _escapeRegExp(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

export default Search;
