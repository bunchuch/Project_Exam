import { CiHome, CiRepeat, CiUser, CiMemoPad, CiAirportSign1 } from "react-icons/ci"
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../../components/Icon";





const getItem = (label, key, icon, children ,link) => {
    

    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  
  
  export const items = [
    getItem('User', '1',<CiHome/>),
    getItem('Option 2', '2', <CiUser/>,null),
    getItem('User', 'sub1', <CiMemoPad/>,null),
    getItem('Team', 'sub2', <CiRepeat/>, null),
  getItem('report','3' ,<CiAirportSign1/> ,null)
  ];