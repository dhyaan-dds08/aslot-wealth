import bcrypt from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(password, salt)
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
    //   console.log('Comparing password:', password, 'with hash:', hashedPassword);
    
  return bcrypt.compare(password, hashedPassword)

}