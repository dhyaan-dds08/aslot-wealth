export interface BlogPost {
  id: string
  title: string
  content: string
  images: string[] | null
  active: boolean
  created_at: string
  updated_at: string
}