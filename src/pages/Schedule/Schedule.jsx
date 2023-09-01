import { Outlet } from "react-router-dom";
import { PageBanner } from '../../containers';
import './schedule.css';

const Schedule = () => {
  return (
    <>
        <PageBanner page="Schedule by Day" />
        <Outlet />
    </>
  )
}

export default Schedule