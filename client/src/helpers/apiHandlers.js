export const current = (json) => {
  return Object.keys(json).map((k) => json[k]).map((stock) => ({
    symbol: stock.quote.symbol,
    latestPrice: stock.quote.latestPrice.toFixed(2),
    changePercent: (stock.quote.changePercent * 100).toFixed(2),
    high: stock.quote.high.toFixed(2),
    low: stock.quote.low.toFixed(2),
    sector: stock.quote.sector
    }))
}

export const movers = (json) => {
  return json.map((stock) => ({
    symbol: stock.symbol,
    companyName: stock.companyName,
    latestPrice: stock.latestPrice,
    open: stock.open,
    high: stock.high,
    low: stock.low,
    chgPct: (stock.changePercent * 100).toFixed(2)
  }))
}

export const indices = (json) => {
  return Object.values(json).map((index) => ({
    symbol: index.quote.symbol,
    latestPrice: index.quote.latestPrice.toFixed(2),
    changePercent: (index.quote.changePercent * 100).toFixed(2)
    })
  )
}
