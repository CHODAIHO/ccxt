import { Exchange } from './base/Exchange.js';
export default class poloniex extends Exchange {
    describe(): any;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    loadMarkets(reload?: boolean, params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Market>>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchTime(params?: {}): Promise<number>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchMyTrades(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): any;
    parseOrderType(status: any): string;
    parseOpenOrders(orders: any, market: any, result: any): any;
    fetchOpenOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Order[]>;
    createOrder(symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    orderRequest(symbol: any, type: any, side: any, amount: any, request: any, price?: any, params?: {}): any[];
    editOrder(id: any, symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: any, symbol?: string, params?: {}): Promise<any>;
    fetchOrderStatus(id: any, symbol?: string, params?: {}): Promise<"open" | "closed">;
    fetchOrderTrades(id: any, symbol?: string, since?: any, limit?: any, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchOrderBook(symbol: any, limit?: any, params?: {}): Promise<any>;
    createDepositAddress(code: any, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: any;
        network: string;
        info: any;
    }>;
    fetchDepositAddress(code: any, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: any;
        network: string;
        info: any;
    }>;
    transfer(code: any, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    }>;
    parseTransferStatus(status: any): string;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
    };
    withdraw(code: any, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        currency: any;
        amount: number;
        network: any;
        address: string;
        addressTo: any;
        addressFrom: any;
        tag: string;
        tagTo: any;
        tagFrom: any;
        status: string;
        type: string;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: {
            currency: any;
            cost: number;
        };
    }>;
    fetchTransactionsHelper(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchTransactions(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<{}>;
    parseDepositWithdrawFees(response: any, codes?: string[], currencyIdKey?: any): {};
    parseDepositWithdrawFee(fee: any, currency?: any): {
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
    fetchDeposits(code?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        currency: any;
        amount: number;
        network: any;
        address: string;
        addressTo: any;
        addressFrom: any;
        tag: string;
        tagTo: any;
        tagFrom: any;
        status: string;
        type: string;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: {
            currency: any;
            cost: number;
        };
    };
    nonce(): number;
    sign(path: any, api?: any, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): void;
}
