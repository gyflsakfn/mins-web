import './portfolio.css'
import User from '../../component/User';
import { useAuthContext } from '../../context/AuthContext';
import { BsFillPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Button from '../../component/ui/Button';

const Portfolio = () => {
  const { user, login, logout } = useAuthContext();

  const handleLogin = () => {
    login();
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <section id='portfolio'>
      {user && <User user={user} />}
      {!user && <Button text={'Login'} onClick={handleLogin} />}
      {user && <Button text={'Logout'} onClick={handleLogout} />}
      {user?.isAdmin && (
        <Link to={'/newPortfolio'}>
          <BsFillPencilFill />
        </Link>
      )}
    </section>
  )
}

export default Portfolio