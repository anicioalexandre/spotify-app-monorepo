import {ImgHTMLAttributes} from 'react'

export interface IImageLabel extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  title: string
  subtitle?: string
}
