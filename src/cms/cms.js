import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import RechtPostPreview from './preview-templates/RechtPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ImpressumPagePreview from './preview-templates/ImpressumPagePreview'
import DatenschutzPagePreview from './preview-templates/DatenschutzPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('recht', RechtPostPreview)
CMS.registerPreviewTemplate('impressum', ImpressumPagePreview)
CMS.registerPreviewTemplate('datenschutz', DatenschutzPagePreview)
