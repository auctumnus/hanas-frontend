import { User } from '@hanas-app/api-helper'

export interface AuthState {
    user: User | null,
    isLoggedIn: boolean
}

export const useAuth = async () => useState<AuthState>('user', () => {
  // todo
})
