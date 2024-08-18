import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '')
    console.log('DB接続に成功しました');
  } catch (error) {
    console.log('DB接続に失敗しました');
    throw new Error('DB接続エラー');
  }
}