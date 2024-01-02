import './style.css';

const UserProfile = () => {
    return <div className='user-profile'>
        <div className="user-profile-img-wrapper">
            <img className="profile-bg" src='/images/test-bird.jpg' />

            <img className="profile-img" src='/images/test-cat.jpg' />
            <div className="user-name">Conative</div>
            <div className="user-notice">포기하지 않는 js 개발자입니다.</div>
        </div>
    </div>
}

export default UserProfile;