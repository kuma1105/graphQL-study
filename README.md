# graphQL

Application Programming Interface

API는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 즉, 프로그램들이 서로 소통하는 방법이다.

REST API는 특정 URL로 요청을 통해 이루어진다.

REST APT가 자주 쓰이는 이유는 예측이 가능하다는 점에서다. 파라미터를 보고 쉡게 유추를 할수 있다.

의도를 전달하지 않는 URL이 좋다.

그 기술이 해결하려는 문제가 무엇인지 아는 것은 매우 중요하다.

GraphQL이 해결하는 문제점

1. Overfetching
필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말합니다. GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있습니다. GraphQL 쿼리는 항상 예측 가능한 결과를 반환합니다.

2. Underfetching
필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다. 일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.

https://graphql.org/swapi-graphql

npm init -y

npm install apollo-server graphql

npm i nodemon -D

package.json에서 type을 module로 사용하는 이유는 js파일에서 import문이 아닌 다른 문법을 써야하기 때문이다.

* Apollo Server소개

Apollo 서버는 Apollo 클라이언트를 포함한 모든 GraphQL 클라이언트와 호환되는 사양 준수(spec-compliant)의 오픈 소스 GraphQL 서버입니다. 모든 소스의 데이터를 사용할 수 있는 자체 문서화 가능한 production-ready GraphQL API를 구축하는 가장 좋은 방법입니다.

https://www.apollographql.com/docs/apollo-server/

https://www.apollographql.com/docs/apollo-server/getting-started/

* Define your GraphQL schema (GraphQL 스키마 정의)

모든 GraphQL 서버(Apollo Server 포함)는 스키마를 사용하여 클라이언트가 쿼리할 수 있는 데이터 구조를 정의합니다.
(스키마는 type definitions의 모음입니다.)
```
// 예시
const typeDefs = gql`
type Book {
title: String
author: String
}

type Query {
books: [Book]
}
`;
```
https://www.apollographql.com/docs/apollo-server/getting-started/#step-3-define-your-graphql-schema

* typeDefs 오류가 나타나는 이유는 graphql이 data의 shape을 미리 알고있어야 하기 때문이다.

