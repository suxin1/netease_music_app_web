import { schema } from "normalizr";

const userSchema = new schema.Entity(
  "user",
  {},
  {
    idAttribute: (user) => user.id || user.userId,
  }
);

const profileSchema = new schema.Entity(
  "profile",
  {
    userId: userSchema,
  },
  {
    idAttribute: (profile) => profile.userId,
  }
);

const loginSchema = new schema.Object({
  account: userSchema,
  profile: profileSchema,
});

export const userSchemas = {
  ACCOUNT: userSchema,
  ACCOUNT_ARRAY: [userSchema],
  PROFILE: profileSchema,
  PROFILE_ARRAY: [profileSchema],
  LOGIN: loginSchema,
};
