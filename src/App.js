import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
    return (
        <>
            <Avatar image="https://plus.unsplash.com/premium_photo-1688700437975-0ea63cfa59e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" isNew={true} />
            <Profile image="https://plus.unsplash.com/premium_photo-1688700437975-0ea63cfa59e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" name="kyuyoung oh" title="frontend dev" isNew={true} />
            <Profile image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" name="Anna Young" title="backend dev" isNew={false} />
            <Profile image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" name="bob you" title="frontend dev" isNew={true} />
        </>
    );
}

export default AppProfile;
