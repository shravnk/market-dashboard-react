export const handleCurrentData = (json) => {
  return Object.values(json).map((stock) => ({
    symbol: stock.quote.symbol,
    latestPrice: stock.quote.latestPrice.toFixed(2),
    changePercent: (stock.quote.changePercent * 100).toFixed(2),
    high: stock.quote.high.toFixed(2),
    low: stock.quote.low.toFixed(2),
    sector: stock.quote.sector
    }))
}
