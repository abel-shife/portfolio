import Api from "@/services/Api";

export default {
  adminRegistration(adminRegistrationInfo) {
    return Api().post("adminRegistration", adminRegistrationInfo);
  },
};
