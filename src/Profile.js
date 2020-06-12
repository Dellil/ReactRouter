import React from "react";

const profileData = {
    jangchanhee: {
        name: "장찬희",
        description: "Want to be FE engineer @ SAMSUNG",
    },
    godsu: {
        name: "갓수",
        description: "갓수다 갓수!",
    },
};

function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않아요 ㅠㅠ</div>;
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;
