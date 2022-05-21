import {InputHTMLAttributes, Ref} from 'react'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  ref?: Ref<HTMLInputElement>
}
