import { Exchange } from './base/Exchange.js';
export default class probit extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchMyTrades(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTime(params?: {}): Promise<number>;
    normalizeOHLCVTimestamp(timestamp: any, timeframe: any, after?: boolean): string;
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOpenOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): any;
    costToPrecision(symbol: any, cost: any): any;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: string;
        network: string;
        info: any;
    };
    fetchDepositAddress(code: any, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: string;
        network: string;
        info: any;
    }>;
    fetchDepositAddresses(codes?: string[], params?: {}): Promise<{}>;
    withdraw(code: any, amount: any, address: any, tag?: any, params?: {}): Promise<{
        id: string;
        currency: any;
        amount: number;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: string;
        tagTo: string;
        status: string;
        type: string;
        txid: string;
        timestamp: number;
        datetime: string;
        updated: any;
        fee: any;
        info: any;
    }>;
    parseTransaction(transaction: any, currency?: any): {
        id: string;
        currency: any;
        amount: number;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: string;
        tagTo: string;
        status: string;
        type: string;
        txid: string;
        timestamp: number;
        datetime: string;
        updated: any;
        fee: any;
        info: any;
    };
    parseTransactionStatus(status: any): string;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<{}>;
    parseDepositWithdrawFee(fee: any, currency: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    };
    nonce(): number;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    signIn(params?: {}): Promise<any>;
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): void;
}
