import React from 'react'
import s from '../stores/styling'

export default function ProfileSideBar() {
    return (
        <s.ProfileSideBarWrapper>
            <s.Div className='profile-sidebar-container'>
                예약 관리
                <s.StyledUl>
                    <s.StyledLi>
                        예약 확인
                    </s.StyledLi>
                    <s.StyledLi>
                        지난 예약
                    </s.StyledLi>
                    <s.StyledLi>
                        나의 리뷰
                    </s.StyledLi>
                </s.StyledUl>
            </s.Div>
            <s.Div className='profile-sidebar-container'>
                나의 계정
                <s.StyledUl>
                    <s.StyledLi>
                        회원 정보
                    </s.StyledLi>
                    <s.StyledLi>
                        마일리지
                    </s.StyledLi>
                </s.StyledUl>
                </s.Div>
            <s.Div className='profile-sidebar-container'>
                고객센터
                <s.StyledUl>
                    <s.StyledLi>
                        1:1 문의하기
                    </s.StyledLi>
                    <s.StyledLi>
                        FAQ
                    </s.StyledLi>
                </s.StyledUl>
                </s.Div>
            <s.Div className='profile-sidebar-container'>
                Tapttoo
                <s.StyledUl>
                    <s.StyledLi>
                        공지사항
                    </s.StyledLi>
                    <s.StyledLi>
                        아티스트 등록
                    </s.StyledLi>
                    <s.StyledLi>
                        채용
                    </s.StyledLi>
                </s.StyledUl>
                </s.Div>
            <s.Div className='profile-sidebar-container'>
            로그아웃
            </s.Div>
        </s.ProfileSideBarWrapper>
    )
}