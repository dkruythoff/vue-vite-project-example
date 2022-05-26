import { ALinkProps } from "@/components/Atoms/Link"

export interface MNavigationProps {
  direction?: 'column' | 'row'
  items: Array<ALinkProps>
}