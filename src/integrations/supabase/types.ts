export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      plants: {
        Row: {
          id: string
          name: string
          description: string | null
          image_url: string | null
          benefits: string[] | null
          suitable_space_size: string
          light_requirement: string
          maintenance_level: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          image_url?: string | null
          benefits?: string[] | null
          suitable_space_size: string
          light_requirement: string
          maintenance_level: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          image_url?: string | null
          benefits?: string[] | null
          suitable_space_size?: string
          light_requirement?: string
          maintenance_level?: string
          created_at?: string
        }
      }
      plant_recommendations: {
        Row: {
          id: string
          office_size: string
          lighting: string
          maintenance_preference: string
          recommended_plants: string[]
          created_at: string
        }
        Insert: {
          id?: string
          office_size: string
          lighting: string
          maintenance_preference: string
          recommended_plants: string[]
          created_at?: string
        }
        Update: {
          id?: string
          office_size?: string
          lighting?: string
          maintenance_preference?: string
          recommended_plants?: string[]
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]