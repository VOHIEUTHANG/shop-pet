import { Avatar, Tooltip } from "antd";
import avatar1 from "../../assets/images/avatar/superadmin.jpg";

const AvatarProfile = () => {
    return (
        <div style={{ cursor: "pointer" }}>
            <Avatar src={avatar1} />
            <span style={{ marginLeft: 12 }} >Tinh Van Nguyen</span>
        </div>
      )
}

export default AvatarProfile;