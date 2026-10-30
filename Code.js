function myFunction() {
  // 학생 3명의 가상 점수를 합산합니다.
  const scores = [80, 90, 100];
  const total = scores.reduce((sum, score) => sum + score, 0);

  // 계산한 총점을 실행 로그에 출력합니다.
  Logger.log('총점: ' + total);
}
