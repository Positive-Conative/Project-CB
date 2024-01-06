import './style.css';

const UserProfile = () => {
    return <div className='user-profile'>
        <div className="user-profile-img-wrapper">
            <img className="profile-bg" src='/images/profile-bg.png' />

            <img className="profile-img" src='/images/profile-fg.jpeg' />
            <div className="user-name">Conative</div>
            <div className="user-notice">개발자입니다.</div>
        </div>

        <div className="profile-btn-wrapper">
            <div className="profile-btn-item">
                <img src="/images/logo/github-mark.png" alt="" />
            </div>
            <div className="profile-btn-item">2</div>
            <div className="profile-btn-item">3</div>
        </div>
    </div>
}

export default UserProfile;