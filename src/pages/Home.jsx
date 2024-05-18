import Followers from '../components/Followers';
import CardList from '../components/CardList';
import VideoView from '../components/VideoView'

const Home = () => (
  <div>
    <Followers />
    {/* <FollowerChart /> */}
    <div className='flex gap-10'>
    <div className='w-[600px] border border-[#619AEB] shadow-2xl rounded-lg'>
    <VideoView/>
    </div>
   <div>
    <CardList/>
   </div>
    </div>
   
  </div>
)

export default Home;