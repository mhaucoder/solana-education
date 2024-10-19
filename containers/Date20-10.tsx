import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Music from '../components/Music';
import Swal from 'sweetalert2';
import DisplayLottie from '../components/DisplayLottie';
import Snowfall from 'react-snowfall';
var nameMusic = 'none';
const Date20_10 = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });
  const form = useRef<HTMLFormElement>(null);
  const [send, setSend] = useState(false); // typeScript
  const [snowShow, setSnowShow] = useState(false);
  const [music, setMusic] = useState(false);
  const openThiep = async (title: string, text: string, nameMus: string) => {
    await Swal.fire({
      icon: 'success',
      title: 'Mật mã chính xác',
      text: 'Hãy mở loa để nghe nhạc và xem lời nhắn được gửi đến bạn nhé!',
      confirmButtonText: 'Xem thư',
    });
    setSnowShow(true);
    nameMusic = nameMus ?? 'none';
    setMusic(true);
    await Swal.fire({
      title: title ?? 'Gửi tới',
      html: `
       <div style="font-family: 'Pacifico', cursive;">
          <p style="font-style: italic;">"${text ?? 'Lời nhắn'}"</p>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 20px;">
            <div style="margin-right: 20px;">
              <p>Thân ái,<br><strong>Nguyễn Minh Hậu</strong></p>
            </div>
          </div>
       </div>`,
      width: 800,
      padding: '1em',
      color: '#000000',
      background: '#fff url("/img/background/hinhnen.png")',
      backdrop: ` rgba(252, 93, 241, 0.4) url("/gif/meo1.gif") left top no-repeat `,
      showConfirmButton: false,
      timer: 60000,
    });
    setSnowShow(false);
    setMusic(false);
    nameMusic = 'none';
  };
  const sendRequestPromt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSend(true);
    const inputElement = form.current?.querySelector(
      'textarea[name="your_request"]'
    ) as HTMLTextAreaElement;
    const pass = inputElement?.value.replace(/\r?\n/g, '');
    if (pass === 'me1703') {
      // mẹ
      openThiep(
        'Gửi lời tới mẹ của con',
        'Con biết nơi quê nhà mẹ vẫn luôn lo lắng cho con, nhưng con nơi xa đã trưởng thành hơn rất nhiều. Con hiểu để sống và tồn tại không dễ nhưng đạo đức tốt hay xấu con có thể phân biệt, xin mẹ đừng lo. Chúc mẹ có một ngày lễ vui vẻ, đầy sức sống và luôn là chỗ dựa cho anh em con. Con chỉ có vài câu thơ tặng mẹ. Yêu mẹ !</br> Nắng vàng chiếu rọi muộn màng </br> Lòng mẹ mang bao sầu thương </br> Con nơi phương xa vẫn nhớ </br> Người mẹ tần tảo nuôi con',
        'thansinhphumau'
      );
      // } else if (pass === 'phuonganhpeiu3322') {
      //   openThiep(
      //     'Gửi lời tới người anh thương Phương Anh',
      //     'Anh biết anh nhiều hơn rất là nhiều tuổi, nhưng khi bắt đầu anh đã chấp nhận thì mọi tính tình của em anh đều có thể hiểu và thông cảm. Nhưng anh là người ít nói, ít khi giải bày tâm trạng với ai khác, kể cả em. Người thật sự để anh nói ra chỉ có người đi cùng anh tới cuối đời. Nhưng anh nghĩ chúng ta không thể. Đương nhiên đó chỉ là suy đoán anh mong 1 ngày nào đó nó sẽ thay đổi tích cực. Tâm anh chỉ có mỗi em thôi. Thương em rất nhiều. Chúc em có một ngày lễ hạnh phúc, anh xin lỗi vì những muộn phiền do anh gây ra!',
      //     'nuadoituyet'
      //   );
      // } else if (pass === 'nganyc2212') {
      //   // người yêu
      //   openThiep(
      //     'Gửi tới Thanh Nga',
      //     'Có lẽ hai ta không có gì để nói hơn là tình bạn. T mong m với t vẫn là người bạn thay vì trở mặt thành một người xa lạ, có những lúc t kiệm lời vì khoảng cách chúng ta không cho phép, t vẫn mong m có được hạnh phúc. Chúc Nga có một ngày lễ vui vẻ hạnh phúc bên người yêu!',
      //     'chanhlongthuongco'
      //   );
      // } else if (pass === 'kimtientt3311') {
      //   // người yêu
      //   openThiep(
      //     'Gửi tới Kim Tiền',
      //     'Có lẽ anh là một thằng đàn ông tồi khi không giữ được em. Anh rất xin lỗi vì đã đến bên em lúc anh không có gì, xin lỗi vì đã từng bỏ rơi em và xin lỗi vì những suy nghĩ, hành động thiếu trưởng thành của anh. Cảm ơn em vì mọi thứ. Chúc em có một ngày lễ vui vẻ bên người em chọn.',
      //     'chanhlongthuongco'
      //   );
    } else if (pass === 'emgai1112') {
      // người thân ( em gái )
      openThiep(
        'Gửi lời tới em gái Lan Hương',
        'Năm tháng còn đó, tuổi trẻ nên có chừng mực cố gắng phấn đấu. Không nói ngày càng lớn chỉ mong đừng có mãi là trẻ con, không bảo phải nghe lời chỉ mong đừng không phân biệt đúng sai. Cũng không biết nói gì nữa thôi thì chúc em gái có một ngày lễ ngập tràn hạnh phúc và sớm tìm được chân ái.',
        'xomu'
      );
    } else if (pass === 'thihoaegm2222') {
      // người thân ( em gái )
      openThiep(
        'Gửi lời chúc tới em gái không chính thống Hòa',
        'Như tiêu đề, quen nhau qua Internet nhưng anh xem em thật sự quan tâm như một đứa em trong nhà. Mong em có thể nhanh chóng tìm được chân ái của mình. Chúc em có một ngày lễ vui vẻ bên những người thân!',
        'xomu'
      );
    } else if (pass === 'hanhpipo2231') {
      // bạn bè
      openThiep(
        'Gửi lời đến Hạnh',
        'M là gì gì Hạnh t quên rồi nên cứ gọi Hạnh nhé chứ không phải văn mẫu đâu. Có những thứ mà chỉ bạn bè và những kỉ niệm thời học trò mới đem lại cảm giác nhớ nhung thật sự, cảm ơn mị rất nhiều, từng kỉ niệm mình luôn nhớ. Và bạn cũng thế mãi chưa bao giờ phai mờ trong kí ức của tôi. Thân thương và chúc Hạnh có một ngày lễ đáng nhớ, vui vẻ, hồn nhiên như lúc mình gặp nhau nhé!',
        'thangnamkhongquen'
      );
    } else if (pass === 'leirain3211') {
      // bạn bè
      openThiep(
        'Gửi lời đến Mỹ Lệ',
        'Tên dễ nhớ đó, chứ con Hạnh thì t nhớ mỗi tên thôi. Nếu trong đám bạn thì chắc là ít nói chuyện với mị nhất, nhưng ấn tượng và sự trân quý của tui cho bạn là không thể phủ nhận. Tui rất muốn quay về tuổi thơ lúc còn nhỏ, để được nhìn lại một lần nữa những kỉ niệm xưa đó. Cảm ơn mị vì đã cho tui một tình bạn đẹp. Chúc mị có một ngày lễ thật vui vẻ, tràn ấp niềm hạnh phúc và mọi sự may mắn sẽ đến với mị.',
        'thangnamkhongquen'
      );
    } else if (pass === 'thoapitbon1233') {
      // bạn bè
      openThiep(
        'Gửi lời đến Kim Thoa',
        'Tên không dễ nhớ tý nào mà không biết tại sao t lại nhớ nữa. Tuy bạn là người tui ghét nhất trong đám bạn nhưng không thể chối bỏ tình cảm bạn giành cho tui, sự cảm thông và quan tâm của một người bạn chân thành làm tôi không thể nào quên bạn là một người bạn thân thiết. Dẫu gì đi nữa tui cũng luôn trân trọng và yêu quí bạn. Chúc bạn có một ngày lễ với những thay đổi tích cực và ngày càng xinh lên, không xinh lên nổi thì ib t giới thiệu cho vài anh nhé!',
        'thangnamkhongquen'
      );
    } else {
      await Swal.fire({
        icon: 'question',
        title: 'Mật mã không đúng',
        text: 'Có lẽ chưa có ai gửi lời nhắn đến bạn! Đừng buồn, hãy xem những lời nhắn nhủ ở dưới nhé.',
        confirmButtonText: 'Được thôi!',
      });
    }
    setSend(false);
  };
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-150">
          <div className="shape shape-style-1 bg-gradient-pink">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <form ref={form} onSubmit={sendRequestPromt}>
            <Container className="py-lg-md d-flex">
              <Row className="justify-content-center">
                <Col lg="8" className="order-2 order-lg-1">
                  <h1
                    style={{
                      color: '#d5006d',
                      fontSize: '2em', // Giảm kích thước
                      fontFamily: 'Pacifico', // Đổi font chữ
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                      marginBottom: '10px',
                      padding: '10px',
                      borderRadius: '10px',
                      display: 'inline-block',
                      transition: 'color 0.3s ease, background-color 0.3s ease',
                    }}
                  >
                    Chào mừng ngày Phụ nữ Việt Nam 20-10
                  </h1>
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h5 className="mb-1">
                        Hộp thoại này là giành riêng cho những người đặc biệt
                      </h5>
                      <FormGroup className="mb-4 mt-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="your_request"
                          placeholder=" Hãy nhập mật mã để biết được những lời chúc thầm kín !"
                          rows="2"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block // props
                          className={classNames(
                            `btn-round ${send ? 'disabled' : ''}`,
                            {}
                          )}
                          color="danger"
                          size="lg"
                          type="submit"
                        >
                          {send ? 'Đang xác thực' : 'Nhận thông điệp'}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" className="order-1 order-lg-2">
                  <Fade right={true} duration={1500}>
                    <DisplayLottie animationPath="/lottie/tamthiep.json" />
                  </Fade>
                </Col>
              </Row>
            </Container>
          </form>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 98"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 105 0 105" />
            </svg>
          </div>
        </section>
      </div>
      {snowShow ? <Snowfall color="red" snowflakeCount={200} /> : ''}
      {music && nameMusic != 'none' ? (
        <Music name={nameMusic} auto={true} />
      ) : (
        ''
      )}
    </main>
  );
};

export default Date20_10;
