import React from "react";
// import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { Total } from "../components/CartComponents/Total";
import Button from "../components/CartComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemAPI } from "../store/cart/cart.actions";

// const cartdata = [
//   {
//     _id: 1,
//     img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUXGBcaGyAYHBsbHBsgHRwdIBwgICAcGhsgISwkIB0pIhsdJTYmKi4wMzMzGyI5PjkyPSwyMzABCwsLEA4QHhISHTIpJCoyMjQyMjIyMjIyMjIyMjIwNDIyMjI7MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAPMAzwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABQMEBgIHAQj/xAA+EAABAgQEAwYEBAQGAwEBAAABAhEAAyExBBJBUQUiYRMycYGRoQZCscFS0eHwFCNyggczQ2KSwqKy8WMV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAQQCAQUAAgMAAAAAAAABAhEDBBIhMUFRIgUTMnGRYeEUgaH/2gAMAwEAAhEDEQA/APZoIIIACCCCAAggggAIIIIACCCCAD5BHK1AByQBuYTY34lkSwWVnOyah9s3d94lGEpOkrITyRgrk6HcQzp6EB1qSkbkgD3jCY/4vnLJTLCUDcVUxcCpDaFVBYXrCv8AiFrOZaion5iXPS+wqRS8aoaKb5k6MWT6hBcRVmzxfxTKTSWCs6Hup9TU+QhFjuPz1uy8qdk0/wDK7+cLEIJZht4DW/tHacLMJent7PaNcNPjj/sxT1WWfn+HxWLWDm7RZO+dV/F40Xw18RFShJml1Huq3/2q66vGZmYWlSQSG2rH1IUkpUO8FBQ8QXB9QPSJZcUJxorw5pY52n+z1OCIMJPC0JWLKSFeoieOM1XB6BO1aPsEEEAwggggAIIIIACCCCAAipPxSUnLmTmuxIoItQhxSiVpqoZlqNHsgN4UZ63DiHFWJuhgmcT83o32jpM1W8IpE1HKZjGiyxABYqowDlmFHqaxzM4uhJSEkgKWUu1AAA7CpAdy0T2kbNCMQrYR0MQdoSyuIdolakKpnCAGzEeQah9nhZ8U8YmyFy0ylJcglQIBBNG6760hxhudILZr+3GxjP8AGeJY0OJEhDfiKwpTf00A8yYr/D/Fps9C1LSk5VADKGcs57xqRvaL8rGZ2ZJHKFiqS43DGp6mm0PbsfKsUrkqujB8Q/jFEmeJq2L1ByA6EBIy/S0U0LIoXBGhuAzHSjAnpHo0uelYzJUCL8p/Rxu5ilMXLXcy1atymh8S4HU/eNkNVtVbf4YMmh3O939MUhbnRvTW22oGkW8OgrWASL1pQsanpZ/7Yeq4fKP+mnSzpfa2j71fyipicJ2aFmXXltqAzODfRmJJi6OqjLjozS0U4c9k0rK2Y1AJCE/VSvH3j6vFKNHptYegpFVCnSG2iJazC22+Sf4qkdYmS4JTf96RUwU7OFIVRaQPNJ16mt/CGCFRnZuNCZqX/wB0vxDJLeRJicHzRXlha3I9H+EcVmlqlvVJcf0qr9X9RGijzb4b4lkxMt+6rkP91qf1AW6x6THN1WPZk/fJ0dFk34kvXB9gggjObAggggAIIIIACCCCADkxmcRiAkpIBKhLXMDFy5LgBBoTVx5iNDjF5Za1bJJ9oymPzJExbLZEtKAUuHKqEO+jPRme8TgiEiPDJXNOdaWUJaKEMxJUTTSIcBwhUybLmTAezHaFrMSotq5cN/xjQYKSQFFbOMoLWohL+7xDh5ys2QfLLBbckFv30idiFK8BKky0LlkgqmEgBVyTSwJIO0Q42f2kyZmTmCUIQqWE5qg5szOCAEkihF+kWzh3myAp3SlaqtQ7N+XvCDiWEAmzZ+UuCsZmmOMqAE5GGRncHN1i3GrYDXhMtHYlUt0hcxWULIKqJCQDzAFlWS7WBjvF8RRLlqKUutQKiNRdsytWejOB1hfh1dnhJXPkPZqUK1JUsKAYEUokihJi5Jw/ZSM7c5y61BJD1FXFbRCf5Mf+ShL4hMRIJCAMySRS70SSQBmLMzjyivN4womalTiqEJpmAOpYi76mgjU50iRLDO/Zi4V8yXrrY1jLTV51ky0E55xCnZYDauO6LtesRHa9DFKEJExYFlKIAJA5UgFqjVNVGgNoqKxiwpTqJTLlglg5zFI5g/nU3fzHyST2Kkn53b+9VPHvRR4gFZZ6lBTqWEpJNwDTL5eTv4AA+4DiICuymEBTBTMQGUHDA9DDQoBq8YjjaCqaoouks4vSnnaIU8SnpGXOWG4/SN6Tpfo58oxcnXs2PEcciUg1rGRkLVNmZg7B99bnpFcpmTSHJMPMDw7KljQnb18R7xdjjzZnzTjGO1dstoBFtPqOmulepj1XhOM7WSiZ+JIJ6GxHqDHmItp++vkTbSNZ8C41wuSdGWnwNCPIsf74p1sN0N3oPp+TbPa/JsYIII5R2gggggAIIIIACCCCAChxc/ylD8TJ9S0VJi8rAEJUtQSC35j6xY4uqiE7rHtzfaF2KlhS5eZJ5CVhQKAxHjzMdx94nHog+xqUtLWNTm9yQPtCuSkCdNLB+VLh6gAs9Wo7UjnDzFlSVLYDKhILEO6kku56EaRakSRzTU1dZJtYU02Yw1wIh5TPscyZbGgZlF6H92jK8UwoTJnTlBAMzMEkIVn5luMys2VsoLFhpGpkqSJk+cpSciQAOmUcw3egttGG4hxeXPSJSRMSTlQ+VBK8rABRDGhZmJ6vF+FNvgBnjUDs0ywwyS0A2qQixvRph5m31EaXDDlFGpYfnCiclJmJCQCrOl++SwIc5cuQ0DOCAIYY3FKQuUlCQrOS4JAp0USz3oxeK3ywIeKrrLH+4n0Qr7tGQlLXLXLDlJaZNWmwYBuYX0cRp+IFRmgMSAhWm5SB9DC3+FWqYpFAjIEtlrzqCQAWpewOnWENFr+EGSUgluZA/wCIzf8ASM/OWpaU5hmCpoZk2CTqw6W99I2XEwmWMxblC1hy1QnL/wB4yclQTKBDgBJVUkmrmpNYBoyaJhVNmHdaj7n218oeYaUkiqQfEPb9Pcwg4cHNr+/TzNPWNPhHSA3eJYFtbk+LOf8AjHXxKoHC1TvJSL2F4bWiQDsGp0PoNzSLS+GNR0jxJH2A32vE5XkTlTtU6k+O0VTMMV75N8DWGKXPZVmYYAkGhGhv5EXFhEvBsV2OIQslhmyq0oqhfQ1Y6d2K/FZalJCkEuk0b7RDKmiagLGtFdDYj/7vFnE4tMq2vHJSXg9dj7Cv4fxna4dCj3gMqv6hQnzZ/OGkcOUWm0z0MJKUU15PsEEEIkEEEEABBBBAAp4pVcsbOr2b7wrxiD2mZqCWoO47yqNlZ67uwIhjjS8/+lH/ALEflGb4niT201KHzHskE9M1ej6EWpFseiD7G84HtACAAHUDqQEKBJJ8QCfAiK+DkhUtIzMAorASVEAP1NA19VAuIo4iUpIJluqZkVmU7tmKQ59DXZ46/wD5SkS0FBqEixtTQwwPmKWRhsQoAuoqADsXLJAYBxU0F1DWM/wb4aniZLXMQEISoE5iHoXAAuOgpDVEwy5aJcxY/wAxJKu78+cnoeW8O5OOTMRMUimQHQAWJpUkAtrzeEWxm4Kl5AgThVpU7IKcxVrmdbuCwAIJNEjUBzHK8Q2IRUmndcXZVcodyXYigDCsV8LzHKsqSzKZaiCQ6VDlcBKSQoNlcsOsc4memXNKyrM4y5QC7UuQQAmncHjeKXwNK+BknFIM1RsAlIA6uskdWcO1opz8TLSpS0JVnWpIrlyqMt1Ahvl5akm0UZPEZZVMLEOoCrWCQKtpcZRTeKuGDlykuVqWymJUEpCRqyjzUT3QLwKQ9ldizFzV5JqpnKSFKbbtFgOmppyXJrEvEDkw6m0Q3qG+8GJUSlTpZSloRlzG4BLOzEjNdmpSK3HpbIUrN3sqcvUF3fWghrljfCEPDUuPXy39vrGklTmmykaZVH+6n0FIQpTkWhvmpbWjetoZ45CihEyX3pdfG/1r7R148wo4OX45bfk0kyIsrxW4XxKXOSKgK1BuIvqATctFF1wXuFlTEqyy1K2r6Qj4fPrMSHYLJHraldI+/EXGA3ZoL7xU4VLpU3r+Za9tjpFuLsq1Eagjf/AuNZa5RsoZ07OKKtS2X0MbiPIuGYvsZyJlglTmp7tlB/6Sb6x62kvHP1mPbO/Zt+n5N2Pb6O4IIIyG8IIIIACCCCADPzlvOmHbKn0f8xCDClUydMKiSBMygMWGVKiWfWgtSohzKW6pi9DMJ9AAb7NWOeFygtKFXzGYvT8QAZnDMTFyKxVMWoTJgGWoQnmKgKqU7lNRpGhZ0tRwB10jPcWkkTE0PNOSKbBKb9HhnwxOZc1TfNl60r6MR+6kYCb4gwnPKZRTVSnYlmQRYdVCI+Az1GVNUpRL/wCmo1GYAZlKJUWfMHJ5WPk5xuDM2cEhqSlXtzKSP+pionhxlyBKAQVZnUzAK5idq0a4pEn0hixPEVqKg+Yjlep1NiTfdw9os8NwoUc6qx94Pw3vrW93uTQDQPu9umsdcGlpRLWsF3UpRNgbknKCUguTY7bMIVZNulSIl4WWJals1Vq8syiPZoTcHTkCNuz9lqJ/6w3x8wy8M7gFMsVL3YDSt4r8LQVJJW5UyAXDHuhVR/fCaBMpzZgUtIYnNMUp7DlOUaMWyUSOkU/iI0lp3U/oP1hh2JBlcqWydo5VUZnPd2r7wi+J8XlWgC4ST6n9IlD8kRn+JQx04dohI0qekOMNMpUaVG1GbegyprqTGcwoJXmNT1s+gPT7Aw7wqmZi2x2uyv8A2WWP4Y6+Lo4mrq0iDFcOWFFUu/Qt0p508opqRPNCqZ7tD9JpSgp5U16hJHmqLmGwxUXtuf08gPWJSgrsqhqJRW0zeC4aXdQP3/PWGiEABh9t/Sp8KJjSyeHBnNBuW/fmHiGfgktykbMQz2+YdN4jHJFcIJwyT5aES6/r99RvrpHpfwhjO0wyH7yP5Z/tt/4ke8efBCCSkd5N0m48tnpQ6RpPgzE5JqpZNFhx/UlzfqM160EU6yG/Hfrkt0M/t5afng3cEEEcg7oQQQQAERzSySdgfpEkV8YpkK8Ov0FYAM8JKg4CwASTzIBIJLmrhyH8GifhSDL5QEEAMkOqlSVVIL3FaBoq4GZmzqq2cpYioynY1pokXTerx0jE5phRlUzAg5SxI0SpTBRAqNGcVixsiot9FzH8NUsIWCAUlSiBV81gDSn5RX4fIRKQGUQHsXJfVyY+TuIrlmWlHMVqZnempSwru5oLRWm8QeYsFLqTltlD5iACHsk/iOoYQWwoZEBKlzC3MlCU12KjXxKmhXj5PaAg12djXRwAfDKPOPoxb1KVUerAi7GrnKDYlsxOlY5OLl/iA6KcEVbmDDKNCO8q8OwoiwyTKkTVEEMlgk5HzAF6J5WqPQxVw3LhTTvJVoKFZLClPm0pF4zEKDFlJse7poQHqPwhydbRKqRLVLyBk1FABQpUFM1ja3WCxiLjU1SkhKHdS0oDNqep6RYw4czunaE+KXT/ANIu4vBOl3QplBSQlJScwsxdXsIXSlzEy1IypKlmqkrehU6stLsTWwhB2LuMrAmTgC4ly0ywejVbYP5xj+L/AOYE2yoSG2d1f9o2C8Bmz5zRa84ykilqk76qNHZhCFPC+2nzZi3EsLyBtSAzA+XvFmHmRHK1GIuwzbj7gM562Gj3hnKO9dxSpcONr5U6GhhuODyAG7Me7+rwt4pw9Uk50F0fMNR1B2EdSE10cjLDc7RZlVNS/wB6n6qzK8ECHPDluTTlS1DqesJeGLSogi36fkw0uYZcGxLqmpNwv2IpEsj+Jnwx+fIzxM46mKqVxPMQ8RpkxnVUbJW2JOLo7NYmp35hv+/yi1hsUUrQtHykLHgCC27G2tzEPxJNCUFJu33EUsMs9mimn208tRvF2P5RpmbOtrUl2e0SJoWlKkl0qAUDuCHESxmfgjH9ph8hNZaim/ymqdNHKf7Y00cXJFwk4vwdvFNTgpLyfYIIIiWHyKPFlNLNSOoLEauPBni9CX4nm5ZR8FH2Z/GsOPYn0JcNyyEjtRLKnGZgC5JPK58xqQ+kJzxJayiXLmyzkId3BWEmidQ3QRJxFBP8PL+UIUsgOkUSGIrQOXdW8QSuHTFS5UoSSClaSZiShQDF3oXrrDl2aMCTi7LvEpk5U2UAkgMpVPRy9G6dYq8NxrKYh3mEqLuXAUS7ithclqEWi7OWrt2UVciBqWck+RpCxcpakhZSEjLMWwpQMmpc73iRQmTS0hXYqCT/ADJql1BYAHmVzFncMpat6QywVVKUNnetHUtT1oKKAKjVQtC7g2KCQhBOU5DNCcoU9CXC1XI2Oj0pEs3iHYpTQHMoiqiWySxUOGUoEHmNGNIAJZmK7NCSzlSlMkFixUS6QLC1+ZQMRcQxyEod6lgAKGpsSKpHQVrWE5lrmdilSixKRUEh6F9tD6xf4zw9COyGckqWH662hc+CSS8l5SmRU5qAFgSSbsyetQhPnFfDTu0QC1TQgi52YXs4SOVOsLsQopUFdolIQap8bgl3qIs4HEqmFS8yCggBkk0Y0SQACxc8o1DmIbuS77a22jlWMGaZRwiru5UWfUMTRnsk6Qp4SoqTmJLFSlMS/eLnz/KJ8StIlTlkHvmtEvlIYH8TMxTYdY4+HiFSgR+zGvT9sw6r8aL4VV9vrHczmQQdokXJ09fGIMSsISXLfbrGy0c1Rdma4ZMMuYpINAeu7BzbrXaL+JWqXME5FQRzD3/XzhRh5gVMXMqxNN2fpYmibfNDdK3DEivhWvSlVU8ERfHmJRluE9yHmE4vKmJcrSk7Eh4+YvjMqWO+CeheMxieDpNUHy++/WKw4Sofh/f7bzir7Ts0LPBqyPG4tU6Zmrl2hpKJy1at7Xuej+kR4bhxTYZvo728z1FBExQR+/NyfVVekaMcNqMeoy73x0aH4Hx3Z4nITSYMp/qFUnfcbVj02PE8OpSFJWlgpJCk61FQfpY6x7JgMQJktCxZSQrwcW8rRzddjqSl7Oj9OyXBx9FqCCCMB0gjPfErqGQM5DVJapsQNaUJo4jQxk/iUhUxCCAQVpSxBY0djZwdK0UA94lHsTF6sOVzSQlKlJktlNEqKlVqRam0QYblmy8uHEqZzKBQpJQoAMQWazx3iFqzzhdJMsLCP8zJ8xoHrUFiwY7wcGMtGIX2JIlFNXzBOd6MFVdneCXLo0Y7jBv9keHBXNmrU3KADy2pYqYPYUf7RZ4jiT2KlM47MBxRgoqqKK/Cne7xYMtpM0sQpcw97VyAPIgW9o5l4YTEGWpTMpAVXLRKEnZT1Jo/nFhlF83h2QldG7IS0l095TCgu9bauYT49JmTQL/y5inu2dagBmfqKANDrHT3mTiAAntEJcOO5zZVUcFg4Au7RSwctC5iQnvoEpCqgggEKIDVYZTTQwnySXA2mcHAmomHLkSnLUl9XYM2o1egtql4rMCsRKSG5QpXWzUh7xCeaDSM9MJM12DBLXrvbbxhSY4ryL1S8x7Rgs9qqjgOlIYABRqzm0X8AhXaTZhQZacoFaA3ckjptpH3DYI9hKV2KJoIJ5lBJBKjQOPvE2ElplyJqwDLdSnSo9xgx0PK51G96RVXyNakvtf+CTiM3Lg3bv3o13HlRuXzMIOHcQmSFBUtV6lJFP22vWHXxDNaQhNOZvlbrQXSHGznWM9LWPm9Pt5sB6xs06s5+Zj8/FiiKy6+P6Qpx3EZk481BsPvHKZQIsNK+1To5c10RePqMos/k/h5FnNCbiNqgzG5x8ImwqGarWb7Ea05lU6RflL0Zh9A3uUppUXXFATALpIfRQp+RsA9NYuyjVwQT9av4tmdXggRfEw5U7tjKSjNQ06bdALsDy+sM8FgwTQOd9A2+nmYU4NYSlS9g49Kebc27qjQ4FxLG5DmFkk4rghigpypky8LLA0Uf7vzH0hZjcKlKSpAIauVypJs4GoNN4tTpnWI0LJ0imMpLmzRLHB8UJpK0TE5hQg1G2vhW9do33wPi3lKlPVBcf0qc/8Atm9RHnuLldnOoeWZykVof39TDz4Xx4lYmXXlXyHbmsdu8B7w9RH7mJ/0rwv7Odenx/T1CCPkfY4x3j5GQ4rNKsQlKVCpVmFVApDA/wBIJDFIq7GNfGIW68SVaJQTXQqNcwblBFDqaGJRAX43FJyKKZi5RVMUl8r5inlyqZNNAUgtQGtYl4TJJSpUxExKzTNMU7tqkmrjWjChrFvF4lEsFOUEmhSWbwUE22I1DEwpw2KVLBEtkpJfLceAfTpaE/ysvjJfb20MZv8ALlplo1XU3oDW7A6AqoGLi0WUYgqdRYOpRpSgJAIPgBzG4tCmbilLWgqZkkE0cliCLlnDUi7K5pIBBU6HYcxJIegsTVwo0FRpE7so20UhOzy3oHUtmGRgxSGoSA6nBPMbR9wij2pVTlmHL0TkLJ/2JJU+UOom8c4ZBSJSTSmZqJZ5ma5rZB/mHWgjvBTVKAmKckIWrQMCoC/yg5DzNmJ8YBkWAlFU2apyoKXuyagHuaKZnqTvHUrBoKsUU0UAUBR0OSotaxesd8MPISaOolibC3y0SktUCpNdYqKxKjLmFa+VS8oZk0dmOUE1dsgD6mFY9r8HyemWlUsYgFcrs0dmUuUFhzEZaPau0QYlUyZhglWYk0AJrkCqE+CbqOloixs5RmGWlUxfymWAxGVh3gGU34RysRWL0zDumWHICSFM4USU7n5iPxd0DeKrts1zVQSf+DN/FclVFBPIgpSTZisKKQxqxCSXNS0Z1EerYXhH8Tg8agDmUoBH9ctIUliakFRZ+pjylEbdM7OdqB9wzhKpicxNKBI30H2PmI1kjhUrDjKACtuZWr7Dwhd8PTrIJqg/p9APSG2JJrG2bdpHLg7tkaylQYgEVFfGM3xbAdke0R/lnvJ08vpDtCj7xzxRIMpb7H6QL4sE93YsQvNKVlUOYfXUv1+kOuDYkTJSS9QMpGxFDGU4VPZIcfWwvTwDU3izKxC5KzMTVJ7yXF/3SLZrdG0U4/hkaZrVo2pEPZs5MLE/FcoiqFJOzOIXcT+IlLGWWCBuYzrcbHFLkj4tiErmpA0U51oOniT6R12hd9d+unTbaFeEll8yqvv0/Y1hkATY1/fnf6RrxxqPJz9Q058HsnB8b20mXM1Ka9CKEeoMX4xH+HeM5VyCbc6fA0V7sf7o28cPNDZNxO5gnvgmRYlbIUdgTdtN9Iw0vEjtJpAbKwKqku1g9KAtmNwQwjZ8TU0pfg1gbkCxpGQwuFYrcBWZZUzn0ejkaKsQekRiXEGFwmcuaj38IvY/CIKQyQCIsy5AFRytpEE9bnpEqoW5tiqdhsstZJqElvSkQT8QoIKE1pkA+huHa4BpEvElnKzu5SPVQf2iDE4TPLynKMykjmLA1t1PSE/SJL2yebNCC5VVKRsSpSUKsD3lOsVPKk2inKxxWCTUlCQXANSCSTuo5g59IOMr5ZgSC5dPeSmrpTUg/wD5kZRaKkkdlLJPMSsJbUsyaMNGJ8ojJvpE412y+nC5ZalBhQqag019IqcNllMtIPU+t/aL/EpoTKKiCOVyks/gdIq4RLISwago7t0eINJEoybLM2WibRYrYEXGzMXp+EX1iU7XsN9LUoSLhPdGsQykF+sTTD+Te4DCw2SNbwIk34s1nwlJy4YElytS1k+KiPtHkfxrwv8Ah8bNQAyFntEf0rqQPBWYeUe1cHQ0iWP9oPqH+8Yv/FjhmaVLxAFZasiv6VWfwUAP7ovwSqaMuRXZgcBjjLWmZewI9o3EpaZiAtJBB/dY84SvLbwL2I/bx1IxsyWXQpSfp+6x0pPdyYY40rR6CmXfx+0IfiTiKUo7NJdRv0EJJvGsQoFJX4sAD9Iqy5RJc1Jq/u/oCYSTYtijyy9g6ADyHUv91N1ZEXUEfr0rX0zK84poDCobfoGr5hNKi64sJWdQH2G71A82RTQGNUejBlVuz6rCIVVmfZr7DTYesWJXB9QCept+yfYRPhlIAzLYtt8xdn8LmvlGiwMp0hSyw0Av4DYRGclBWRhvm9qZm14UJ1ANnru128VekQmSLpdv0f6H1Ma6alB094QcWwJH8yXcVIahF6jWFHMn2SlpZLpkvw3iuxxKFk0fKrbKqh8WLeketiPGcKtKk5hazXIP5603j1L4dxva4dCiXIGVXimlepofOMeuh1Nfo2fTptXB/s642ppYG6h42JoNTS2sJUKq99GDnqwNATchqAOIccaNEitydve77AXZoTqQTo+n3AH1CRY0MYEdQ7nhLglQyKFGOu76iJcPhT0UmKExCVEBQzbeezX+gMEnkso+v7p1oBErI0c4/g6lLQE2K3PRkk/YRfnypcpASO9q9vPW/nH2Zj1EDLQ3CxT60bRyL6GFc0LUXMxRN3UAb0egDDQk1NLQrJJN9lDDICs6jamwuVL8jzjlHQmF89Dy0EFkqXXlJcLUaWb5hciHMqSZYISUtS7pIZITXK7WsOZTx1/CIaU6Uky6HM9TS1CAWFtjpeBEm6FnFJRmIKQRcFz0MTYeSWtDVXDQslSSw2/KLaZKZaQnWI7fYb0lSFknDO5NAOre8VcSKkDZv0pYHa5MNMZOS2VHiT+poB1ilgUZpssbrT6Zg9NHa5qYUvQ432zfS0ZQALAAekVOMYET5EyUfnSQDsflPkWPlF+PkCdED86zJSkkoUnKQSCCzgi4bcBhTVUfRTUP93sfFX4hZF40X+IfD+xxilAMiaAsbZieYbHm5i/SEODlhakpJYOHOwOu4o51HNHVxS3JMw5VtPqA45QS1voCdrlVCaqEWMPgZ0wOiVy7mg08HoGtGt4Vg5eRKSAxOZVKsBQD6eUWp8wPQMNBsIslOnSM0HvVvoxk7Azkcy5fV081buRe9fIRAFBnem/lcmxIBJYsXWI2ed4zHH8KJZ7RAoSyvsfVocZ+wcVLhE6F/wCSlmClMfTu+Vo1KjSPPhNPKU/KQR5fdq+cbnh+JTNQFCtKjYi7wszumLDDba8nwqJNLbx0QMpHSJVS3irjpmRCjqB+3iq0WKLszWGXkmTEsG67vT6D0jcf4f8AEBnXJJ7wzp8qHzIY+UedyZhWtStD4/vX3h/8NzlS8RLUHcZvQoUPS3pFk478TRSn9vMpHoHH5nMAGJSl2tcmhLcrtQiriEkzHZaqZhfz8bAvYVzXhjxuYe2V0AGg0FjoDvoQGhFi15zVXgKt/wDd45N0jtpWWJ3GAkPkzC17+IFAOnSIxxkUzJv1vpZq+EUkIADEA1i3hMLKNFJ+zQuX0WfGK5Rew+KRMDpYvWt31d/cmgvEpI++/wDdX3UfKEc7AiSrMm2mo6vDJCBMSClRrXUlx9SK1NGJgQml2idti3s3XceJ5iI5KPy2bUDcbgd41ini5hlh0qrRh13G/wDUdDS0VhNmqKWG1rJ3bUxGUq4Q4wvkaiYoWJ2atzow9kjzMcLWVXJr4VcbC56WGsLF4iYgOZajowvv5Rclznv++ha46Uq0Lc/I3BLlHSw/V6+J3c36k0BtFvgSHxEvpmVf/aa+upvRoqKP7vUb6EixHdF4bfDSP5qjski4uVDzJoRm10hkX0auCCCGVmJ/xO4aJmFE0B1SVOWvkUwUB/4nyMeWYCbzM1wprXIOn5bR+gMZh0zZa5aw6VpKT4EMfrHgGMwapUyZLVRSFFJ8Um/o3/KNukn4M2ogpRNhwDFBaTWrCLc8Ri+HcRMmZmrspP5RspOOlTUhSFi1Qbgxpm/lZkjjqNEaAYV/FCgJLakj6w1xGJloDqUBGO4xxEzlgDuJ94i5WShCnbI8LQD16OdD5sK7GLaZ0yWvPKUQ9SPWvmAT4RFJkFvLzZvWx6hzEwS128vsBTYUakaVC40zNPJU9yJ1fE85mKUvuHihPxU2cWUSx0FvyhtguGzJxIQhSz0DjxJsKsatTWNZw34HWazFBHQVV6jlG/zRnl9vH3IvjknkXxj/AN+DE4bD5WDVbq4+/wBqRt/hD4fWVietOVIcpBuSQQ/gxPtGm4d8N4aSxSjMofMvmI8AaDyAhxFGbWbo7YosxaNqW+bt+jF45ZUuYd1KIsKAs9b0YE2FIX/wqjcFzDKYhlLf8RqehY3u1joAxi5hpYKQdRuST6kB/EUjHVnRujOpwqgaiLa6CGOMqCdoVYpZ5QEkg2LUNHv4Q6oLcmQTUhVFGnjEmFw4CLnvah7FwOvQWFXvFnAYRK+dRYCtQR0/RoixMoKfKr/b+hZr/hFXuYOkO+aKEuQqYtTE0t+/yhoEKlps52cflEHDpakV616DQN9YhxOLWSK+Ouu56QlUVbG7k6O5i1bfM1tN+kSowcw90UhajFTMzZabxOrELVRz4RCU0SUJItrDULOGBZz0a9dOUU3h98JoDTFdUp0+UHUUNxakZpcspDG9jr7/AGF41vwohpD/AIlqP0GnhCXYpdDyCCCJFZ8jyf8AxM4aZeITPSOWakAlqZ06HxGVX9hj1iF/GeFIxUpUmYOVVjqCLEdYnjnslZCcdyo/P6gk9B7t10dg/iqPnZEGhIP7vrekaniHwdi5KinsjNS/KtAd9nSHIrcEaXjvhvwXi5jfy+zTvMOVtO7VT3NKVEdHdBq20ZfkuEjLdkpVz7+NfaGXDcCVKCUpUpRoyQSTRywFY9G4Z/h9JRWctUw7DlT4Fqn1jWYPAy5ScstCUDZIA9d4p/5MYfirHLBKaqTpHn3Dfg2ctIMwCWL1uzvRItoLjWNJw74Kw0s5lgzVbq7v/EUI8XjTtBFGTUzn5r9FmPS44dK/2RypSUgJSkJSLAAADwAiWCCKDQEEEEAGb45hClXaJHKrvUsdzv4Wu8LQtq71u9ursSPRo2akghjUGE074fQSSlak9CAoDa9WGgeCySryUpONlsxT7u++nvaKoKQWCnQKgFnG7bBtdYvr+H16LSfFJH3NtNIhVwWcNEHXlVX3Ar10g3MNsSpiZmZgKAWAp1ck2dnfvHpFRWHFfv10Ld0H8I5ibmL6+HTh/pq8sp9Kn/lfaIFYdaboUPEKHi2w3NzC3skkvBTnYdkHKSFO2g2owLb8odnrFL+DmqdSLC728H8frDQKb08KGlQKgaMKm5idE5QtvqHFLBtx+EeZh7r7HTXQmw+EmKWRkURRmFzTaHsjhYlJ7SaA7OEEhz47CLKOITDQED+kA+lKnXYdYhWCouSX8fcH/saCwh0vRFyb7F85Dk0+oFaj+kHQd41tGv4LLyyEDo9muSbaXtGel4UrUlIudgaA3UHqB/uNSbM8a2WkJAAsAw8BCrkTfBJBBBARCCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAI+R9ggAiVLSbgHxAiBXDpJ/00+Qb6QQQDKWNwEtA5UtUC5NNqm0U8KHvWp+sEEIkuh3h5KUAZQz1JuT4k1i1BBDIBBBBAAQQQQAEEEEABBBBAAQQQQAEEEEABBBBAB//Z",
//     productName: "Paracetamol",
//     des: "bottle of 60 tablets",
//     price: 4564,
//     shortDesc: 451,
//     strikedPrice: 5452,
//   },
//   {
//     _id: 2,
//     img: "data:image/jpeg;base64,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",
//     productName: "ABCd",
//     des: "bottle of 60 tablets",
//     price: 456,
//     shortDesc: 451,
//     strikedPrice: 545,
//   },
// ];

const OrderSummary = () => {
  const navigate = useNavigate();
  const toast = useToast();
  // const [items, setItems] = useState([]);
  const { data: cartData, getCartItems } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address"))
  );
  const dispatch = useDispatch();
  // console.log("total:", getCartItems.withoutDiscountPrice);
  // console.log("discount:", getCartItems.withDiscountPrice);
  useEffect(() => {
    dispatch(getCartItemAPI());
  }, [dispatch, getCartItemAPI]);
  // useEffect(() => {

  // if (items) {
  // setItems(items);
  //   }
  // }, []);

  const handleCheckout = () => {
    axios
      .post("http://localhost:5000/pay", {
        description: "1mg product purchase test mode",
        amount: "1000",
        name: "Ramesh Mane",
        email: "ramesh@gmail.com",
        phone: "7218416746",
      })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          window.location.href = res.data.payment_request.longurl;
        } else {
          toast({
            title: "Something went wrong",
            status: "error",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const button = {
    bg: "#ff6f61",
    text: "PROCEED TO PAYMENT",
    width: "98%",
    br: "0px",
    color: "#ffffff",
    height: "50px",
    fontSize: "18px",
  };

  return (
    <div className={styles.BlogContainer}>
      {/* left side */}
      <div className={styles.leftcart}>
        <div className={styles.ordersummaryheading}>
          <p>Order Summary</p>
        </div>
        <div className={styles.ordersummaryYourItemheading}>
          <p>Your Items</p>
        </div>

        <div>
          <div className={styles.ordersummaryArrivingheading}>
            <p>Arriving tomorrow</p>
          </div>
          {cartData.length &&
            cartData.map((el) => (
              <div key={el._id} className={styles.OrderSummarydataMapDiv}>
                <div>
                  <img src={el.imageUrl} alt="item" />
                </div>
                <div>
                  <p>{el.productName}</p>
                  <p>{el.des}</p>
                </div>
                <div>
                  <p>₹{el.price}</p>
                  <p>MRP:{el.strikedPrice}</p>
                  <p>NeuCoins earned: 4</p>
                </div>
              </div>
            ))}
        </div>
        <Box
          fontSize={"10px"}
          borderTop={["", "", "1px solid #CBD5E0"]}
          marginTop="10px"
        >
          <Text>
            *NeuCoins will be credited 7 days after your complete order is
            delivered in case of Products and in case of Lab Services NeuCoins
            will be credited within 24 hours from the time of generation of test
            report. NeuCoins will not be credited in case a return request is
            initiated for the order. NeuCoins are rounded to the nearest integer
            and the value of NeuCoins earned may change if total order value
            changes.
          </Text>
          <Text pt={"10px"}>
            **Coupon Discount value may change if the total order value changes.
          </Text>
          <Text pt={"10px"}>
            ***Items in your cart will always reflect the most recent price as
            compared to the prices in their product detail page.
          </Text>
        </Box>
      </div>

      {/* right side */}
      <div className={styles.BlogRightContainer}>
        <div className={styles.changeAddressDiv}>
          <div>Selected Address</div>
          <div>
            <Link to="/cart/address-page">CHANGE</Link>{" "}
          </div>
        </div>
        <div className={styles.changeAddress}>
          <Text fontWeight={600}>
            <p>{address.delivery}</p>
          </Text>
          <p>{address.customer}</p>
          <p>{address.mobileno}</p>
          <p>
            {address.building} {address.locality} {address.landmark}
          </p>
          <p>
            {address.city} {address.state}-{address.pincode}
          </p>
        </div>
        <div className={styles.coins}>
          <div className={styles.coinsdata}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" />
              <p>My NeuCoins</p>
            </div>
            <div>
              <p>Balance: 0 NeuCoin</p>
            </div>
          </div>
          <hr />
          <div className={styles.neucoins}>
            <p>4 NeuCoins to be earned on this order*</p>
            <p>Extra 23 NeuCoins for care Plan members</p>
            <p>Add care plan to cart</p>
          </div>
        </div>
        <div>
          <Total getCartItems={getCartItems} />
        </div>
        <div className={styles.deliverylocation}>
          <div className={styles.location1}>
            <Button styles={button} onClick={handleCheckout} />
          </div>
        </div>
        <Box
          mt={"20px"}
          width={["100%", "100%"]}
          // p={["", "", "20px"]}
          borderTop={["", "", "1px solid #CBD5E0"]}
          fontSize={"10px"}
        >
          Tata 1mg is a technology platform to facilitate transaction of
          business. The products and services are offered for sale by the
          sellers. The user authorizes the delivery personel to be his agent for
          delivery of the goods. For details read{" "}
          <Text
            as="span"
            color="#ff6f61"
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            terms and conditions.
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default OrderSummary;
