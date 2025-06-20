// Common types and interfaces for the application

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
};

export const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

// Example user object structure
export const createUser = (id, name, email, role = USER_ROLES.USER) => ({
  id,
  name,
  email,
  role,
  createdAt: new Date().toISOString(),
});

// Example contact form structure
export const createContactForm = () => ({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// API response structure
export const createApiResponse = (success, data = null, error = null, message = null) => ({
  success,
  data,
  error,
  message,
});