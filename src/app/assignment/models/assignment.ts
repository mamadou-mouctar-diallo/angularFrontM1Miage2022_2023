export interface Assignment {
  _id?: string,
  id: String,
  name: String,
  deadLine: Date,
  rendered: Boolean,
  author: String,
  course: {
    name: String,
    coursePhoto: String,
    teacherPhoto: String
  },
  mark: number,
  comment: String
}
