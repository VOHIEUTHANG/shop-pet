import { Avatar, Tooltip } from "antd";
import avatar1 from "../../assets/images/avatar/superadmin.jpg";

const AvatarProfile = ({avatar, name}: {avatar?: string, name?: string}) => {
    return (
        <div style={{ cursor: "pointer" }}>
            <Avatar src={avatar || avatar1} />
            <span style={{ marginLeft: 12 }} >{name || "Anonymous User"}</span>
        </div>
      )
}

export default AvatarProfile;