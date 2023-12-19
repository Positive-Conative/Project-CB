import './style.css';

const UserProfile = () => {
    return <div className='user-profile'>
        <div className="user-profile-img-wrapper">
            <img className="profile-bg" src='/images/test-bird.jpg' />

            <img className="profile-img" src='/images/test-cat.jpg' />
            <div className="user-name">conative</div>
            <div className="user-notice">ffa,.</div>
        </div>
    </div>
}

export default UserProfile;