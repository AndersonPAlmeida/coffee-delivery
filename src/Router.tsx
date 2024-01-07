import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.ts.tsx'
import { Checkout } from './pages/Checkout'
import { OrderComplete } from './pages/OrderComplete'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Route>
    </Routes>
  )
}
