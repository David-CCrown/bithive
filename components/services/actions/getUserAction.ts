import { getUser } from "@civic/auth-web3/nextjs";

const getUserAction = async () => {
    try {
        const user = await getUser();
        return user;
    } catch (err) {
       
        return null;
   }
}

export default getUserAction;