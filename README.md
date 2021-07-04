# bt-vue-router

Layout: https://www.figma.com/file/fQcYavpoLAoaT3ry4mSgVD/Nuntium-Blog-UI-Design-(Community)?node-id=2%3A750

- :heavy_check_mark: Đầu tiên là project chưa run được, trong folder views ko có Home.vue, Login.vue, Dashboard.vue
- :heavy_check_mark: đầy đủ cái routers, đầy đủ layouts
- :heavy_check_mark: các btn yêu cầu có sử dụng được ( click logo, login )
- :heavy_check_mark: chưa đầy đủ các trang yêu cầu
- :x: phần blog detail computed yêu cầu return về blog ( ko phải id )
- :x: nội dung các trang quá ít, có trang ko có nội dung

Nhận xét :

- :x: router blog nên chuyển thành router blogs ( có s )
- :heavy_check_mark: trong phần layout chỉ nên để layout không nên để nội dung ( a đang để nội dung trang login )
- :x: chú ý chia component uncommon và common , thường phần component của layout thì để ở common
- :x: nội dung các trang dài nên chia thành các component
- :x: trang dashboard nên thêm điều hướng để sang các trang khác
- :x: nội dung ít nhưng chưa responsive
- :x: nhát đổi nội dung content :D
