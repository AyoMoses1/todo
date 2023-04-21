import {
  Routes, Route,
} from 'react-router-dom';
import paths from './utils/paths';
import SignIn from './views/Sgnin/SignIn';
import SignUp from './views/Sgnin/SignUp';
import Todos from './views/Todos/Todos';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path={paths.home} element={<Layout />}>
        <Route path="/" element={<Todos />} />
        {/* <Route path={paths.customers} element={<CustomerBase />}>
          <Route index element={<Customers />} />
          <Route path=":customerId" element={<CustomerDetail />} />
        </Route>
        <Route path={paths.agents} element={<AgentBase />}>
          <Route index element={<Agents />} />
          <Route path=":agentId" element={<AgentDetails />} />
        </Route>
        <Route path={paths.yourOrders} element={<MyOrders />} />
        <Route path={paths.wallet} element={<Wallet />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.transactions} element={<TransactionHistory />} />
        <Route path={paths.bdaOrders} element={<BDAOrders />} /> */}
      </Route>
      <Route path={paths.login} element={<SignIn />} />
      <Route path={paths.signup} element={<SignUp />} />
      {/* <Route path={paths.login} element={<SignIn />} />
      <Route path={paths.forgotPassword} element={<ForgotPassword />} />
      <Route path={paths.enterNewPassword} element={<EnterNewPassword />} />
      <Route path={paths.passwordCreated} element={<PasswordCreated />} /> */}
    </Routes>
  );
}

export default App;
