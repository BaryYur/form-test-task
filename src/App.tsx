import { useSelector } from "react-redux";

import { UserForm, UserInfo } from "./components";

import { Toaster } from "react-hot-toast";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {user ?
        <UserInfo
          name={user.name}
          lastName={user.lastName}
          email={user.email}
        /> :
        <UserForm />
      }
      <Toaster />
    </>
  )
}

export default App
