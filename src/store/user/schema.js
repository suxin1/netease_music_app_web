import {schema} from "normalizr";

const userSchema = new schema.Entity("user", {}, {
  idAttribute: user => user.id
});

const profileSchema = new schema.Entity("profile", {
  userId: userSchema,
}, {
  idAttribute: profile => profile.userId
});

const loginSchema = new schema.Object({
  account: userSchema,
  profile: profileSchema,
});

export const Schemas = {
  ACCOUNT: userSchema,
  ACCOUNT_ARRAY: [userSchema],
  PROFILE: profileSchema,
  PROFILE_ARRAY: [profileSchema],
  LOGIN: loginSchema,
};
