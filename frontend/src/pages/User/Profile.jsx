import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../../redux/api/userApiSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { setCredientials } from "../../redux/features/auth/authSlice";

const Profile = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = updateProfile({
          _id: userInfo.id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredientials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message);
      }
    }
  };

  useEffect(() => {
    setusername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.username, userInfo.email]);

  return (
    <div className=" container mx-auto p-4 mt-[10rem]">
      <div className=" flex justify-center align-center md:flex md:space-x-4">
        <div className=" md:w-1/3">
          <h2 className=" text-2xl font-semibold mb-4">Update Profile</h2>
          <form onSubmit={submitHandler}>
            <div className=" mb-4">
              <label className=" block text-white mb-2">Name</label>
              <input
                type="text"
                value={username}
                placeholder=" Enter Name"
                className=" form-input p-4 rounded-sm w-full"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className=" mb-4">
              <label className=" block text-white mb-2">Email Adress</label>
              <input
                type="email"
                value={email}
                placeholder=" Enter Eamil "
                className=" form-input p-4 rounded-sm w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" mb-4">
              <label className=" block text-white mb-2">Password</label>
              <input
                type="password"
                value={password}
                placeholder=" Enter Password"
                className=" form-input p-4 rounded-sm w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" mb-4">
              <label className=" block text-white mb-2">Conform Password</label>
              <input
                type="password"
                value={conformPassword}
                placeholder=" Confirm Password"
                className=" form-input p-4 rounded-sm w-full"
                onChange={(e) => setConformPassword(e.target.value)}
              />
            </div>
            <div className=" flex justify-between">
              <button
                type="submit"
                className=" bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
              >
                Update
              </button>
              <Link
                to="/user-orders"
                className=" bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
              >
                My Orders
              </Link>
            </div>
            {loadingUpdateProfile && <Loader />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
