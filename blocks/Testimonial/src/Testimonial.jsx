import React, { Component } from 'react';
import IceCard from '@icedesign/card';
import './Testimonial.scss';

const generatorData = (count) => {
  return Array.from({ length: count }).map(() => {
    return {
      name: '人物名',
      company: '就职公司/职务',
      description:
        '随着个人用户对于互联网内容获取的要求和口味越来越特别，怎样提供更加精准个性化的资讯订阅服务是提升用户体验的关键。但是本质上来说一般都是通过新闻源智能推荐这样的组合实现的',
      imgUrl:
        'https://img.alicdn.com/tfs/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png',
    };
  });
};

export default class Testimonial extends Component {
  static displayName = 'Testimonial';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(3);
    return (
      <div className="testimonial">
        <IceCard>
          <div style={styles.items}>
            {data.map((item, index) => {
              const rowLastItem =
                (index + 1) % 3 === 0 ? styles.rowLastItem : {};
              return (
                <div
                  key={index}
                  style={{ ...styles.item, ...rowLastItem }}
                  className="item"
                >
                  <p style={styles.description}>
                    “
                    {item.description}
                    ”
                  </p>
                  <div style={styles.infoBox}>
                    <img
                      style={styles.avatar}
                      src={item.imgUrl}
                      alt={item.name}
                    />
                    <div style={styles.baseInfo}>
                      <h5 style={styles.name}>{item.name}</h5>
                      <p style={styles.company}>{item.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </IceCard>
      </div>
    );
  }
}

const styles = {
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '80px 0',
    width: '1080px',
    margin: '0 auto',
  },
  item: {
    width: '30%',
    padding: '20px 30px 60px',
    marginRight: '5%',
    background: '#fff',
    borderRadius: '6px',
    textAlign: 'center',
  },
  rowLastItem: {
    marginRight: 0,
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  },
  baseInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width: '64px',
    height: '64px',
  },
  name: {
    margin: '10px 0 0',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  company: {
    margin: 0,
  },
  description: {
    lineHeight: '28px',
  },
};
