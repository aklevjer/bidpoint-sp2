export const profile = {
  name: "testuser",
  email: "test@stud.noroff.no",
  password: "testpassword123",
  avatar: "",
  banner: "",
};

export const validCredentials = {
  email: "valid@stud.noroff.no",
  password: "validpassword123",
};

export const invalidCredentials = {
  email: "invalid@stud.noroff.no",
  password: "invalidpassword123",
};

export const authResponse = {
  data: {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  },
  meta: {},
};

export const authErrorResponse = {
  errors: [{ message: "Invalid email or password" }],
};
