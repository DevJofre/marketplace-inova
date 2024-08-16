import jwt from "jsonwebtoken";

export const generateJwtToken = (id: string): string => {
  return jwt.sign(
    {id},
    'jofre1234#',
    { expiresIn: '1h' }
  );
};
export const decodeToken = (token: string): string | jwt.JwtPayload | null => {
    const payload = jwt.decode(token)
    return payload
}
