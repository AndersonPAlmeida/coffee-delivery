import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.ts.tsx'
import { Checkout } from './pages/Checkout/index.tsx'
import { DefaultLayout } from './layout/DefaultLayout'
import { Order } from './pages/Order/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId/success" element={<Order />} />
      </Route>
    </Routes>
  )
}
