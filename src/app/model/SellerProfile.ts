import { User } from "../login/users";

export class SellerProfile {
    profileId?: string;
    about?: string;
    location?: string;
    rating?: string;
    customer?: User;
}