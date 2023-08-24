import Headroom from 'react-headroom';
import FirstNav from './FirstNav';
import TopHeaderCard from './top-header-card';

const MainNav = () => {
   
    return (
        
            <Headroom >
                <div className='bg-white'>

            <FirstNav />
            <TopHeaderCard />
                </div>
            </Headroom>
   
    );
};

export default MainNav;
