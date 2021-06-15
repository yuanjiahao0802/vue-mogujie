import { request } from './request';

// export function getAllCategory(){
//     return request({
//         url: '/category'
//     })
// }
// export function getSubCategory(maitKey) {
//     return request({
//         url: '/subcategory',
//         params:{
//             maitKey
//         }
//     })
// }

// ----
export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}