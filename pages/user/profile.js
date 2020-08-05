const Profile = ({ name }) => {
    return (
      <div>렌카 프론트 엔드 개발자 {name} 입니다.</div>  
    );
}

// Profile.getInitialProps = async (context) => {
//   return { name: context.query.name };
// }

export default Profile;