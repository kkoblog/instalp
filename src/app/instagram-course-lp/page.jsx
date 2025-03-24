"use client";
import React, { useState } from "react";

function MainComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "田中 美咲",
      age: "28歳",
      image: "/testimonial1.jpg",
      text: "この講座でインスタグラムを使ったブランディングを学び、商品の売上が3倍になりました！",
    },
    {
      name: "佐藤 健一",
      age: "35歳",
      text: "集客が自動化でき、毎日更新しなくても安定した売上が得られるようになりました。",
      image: "/testimonial2.jpg",
    },
    {
      name: "鈴木 優子",
      age: "42歳",
      text: "インスタグラムでの認知度が上がり、商品単価を2倍に上げることができました。",
      image: "/testimonial3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ファーストビュー */}
      <section className="bg-blue-600 text-white relative overflow-hidden pr-0">
        <div className="max-w-6xl mx-auto pl-5 pr-0 py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 z-10 relative">
              インスタ完全<br />
              ブランディング<br />
              構築講座
            </h2>
          </div>
          
          <div className="flex flex-row">
            <div className="w-1/2 z-10">
              <div className="mb-6">
                <p className="text-lg opacity-90 mb-6">
                  この講座を受ければ<br />
                  インスタで自分の商品を売り<br />
                  集客を自動化し<br />
                  単価を上げることができます
                </p>
              </div>
              
              <div className="absolute top-0 right-[-30px] md:top-8 md:right-[-80px] z-10">
                <div className="relative w-60 h-60 md:w-40 md:h-40 flex items-center justify-center">
                  <img 
                    src="/image/Instagram-removebg-preview.png" 
                    alt="Instagram" 
                    className="w-full h-full object-contain transform rotate-12 opacity-80"
                  />
                  
                </div>
              </div>
              
              <div className="bg-orange-500 hover:bg-orange-400 transition-colors rounded-lg p-1 mb-6 inline-block w-full">
                <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-orange-400 transition-colors">
                  無料面談を<br />申し込む &gt;
                </button>
              </div>
            </div>
            
            <div className="w-1/2 pl-4 z-10 flex justify-end">
              <div className="w-full h-80 sm:h-96 md:h-[28rem] overflow-hidden rounded-l-lg">
                <img
                  src="/image/zyosei.jpg"
                  alt="インスタブランディングスペシャリスト"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 背景のIALISE文字 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 overflow-hidden">
          <div className="text-[20rem] font-bold text-white leading-none animate-marquee whitespace-nowrap">
            Instagram Instagram Instagram
          </div>
        </div>
      </section>

      {/* サブヘッド */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            インスタ完全ブランディング<br />構築講座とは？
          </h2>
          <p className="text-lg opacity-80 mb-0">
            手間をかけずに集客を自動化し、ブランド価値を高めて商品単価を上げる方法を学びます
          </p>
        </div>
      </section>

      {/* ヘッドライン */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            この講座を受講すると<br />何ができるようになるか
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">集客の自動化</h3>
              <div className="mb-3">
                <img 
                  src="/image/syukyaku.png" 
                  alt="集客の自動化" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="opacity-80">
                インスタグラムを使って自動的に見込み客を集める仕組みを構築
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">商品単価アップ</h3>
              <div className="mb-3">
                <img 
                  src="/image/up.png" 
                  alt="集客の自動化" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="opacity-80">
                ブランド価値を高めて商品・サービスの単価を上げる方法
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">効率的な運用</h3>
              <div className="mb-3">
                <img 
                  src="/image/unyou.png" 
                  alt="集客の自動化" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="opacity-80">
                毎日更新しなくても売上を上げる効率的な運用テクニック
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実績・実例 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            ブランディングの成功事例
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-blue-600">ハンドメイド作家 Aさんの場合</h3>
              <div className="mb-4">
                <div className="font-medium">講座受講前：</div>
                <p className="opacity-80">月間売上 5万円、Instagram フォロワー 300人、週5回投稿</p>
              </div>
              <div className="mb-4">
                <div className="font-medium">講座受講後：</div>
                <p className="opacity-80">月間売上 45万円、Instagram フォロワー 8,000人、週2回投稿</p>
              </div>
              <p className="font-bold text-blue-600">成果：労力は減らしつつ、売上9倍・商品単価3倍に</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-blue-600">コンサルタント Bさんの場合</h3>
              <div className="mb-4">
                <div className="font-medium">講座受講前：</div>
                <p className="opacity-80">月間売上 20万円、Instagram フォロワー 500人、毎日投稿</p>
              </div>
              <div className="mb-4">
                <div className="font-medium">講座受講後：</div>
                <p className="opacity-80">月間売上 180万円、Instagram フォロワー 15,000人、週3回投稿</p>
              </div>
              <p className="font-bold text-blue-600">成果：業界で有名になり、高単価クライアントを獲得</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
              無料面談を今すぐ申し込む
            </button>
          </div>
        </div>
      </section>


      {/* 共感 */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            こんなお悩みありませんか？
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="text-blue-600 mr-4 text-xl">✓</div>
              <p className="opacity-80">
                インスタグラムでの集客方法がわからない
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="text-blue-600 mr-4 text-xl">✓</div>
              <p className="opacity-80">
                毎日投稿するのが大変で続かない
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="text-blue-600 mr-4 text-xl">✓</div>
              <p className="opacity-80">
                フォロワーは増えても売上に繋がらない
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="text-blue-600 mr-4 text-xl">✓</div>
              <p className="opacity-80">
                商品の単価を上げる方法がわからない
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ベネフィット */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            講座で得られる6つのメリット
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">商品販売力の向上</h3>
              <p className="opacity-80">
                インスタグラムを使って自分の商品を効果的に販売する方法を習得できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">自動集客の仕組み</h3>
              <p className="opacity-80">
                インスタグラムを使った集客を自動化し、継続的に見込み客を獲得できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">単価アップの戦略</h3>
              <p className="opacity-80">
                インスタグラムを使って商品・サービスの単価を上げる方法を学べます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">時間効率の最大化</h3>
              <p className="opacity-80">
                毎日更新しなくても売上を上げる効率的な運用方法を習得できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">手間を最小限に</h3>
              <p className="opacity-80">
                なるべく手間をかけずに商品を販売する効率的な方法を学べます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-3 text-blue-600">ブランド認知の向上</h3>
              <p className="opacity-80">
                業界内で有名になり、ブランド価値を高める方法を習得できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* 取引の流れ */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            講座受講の流れ
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              { step: 1, title: "無料面談", desc: "現状のインスタ運用と目標をヒアリング" },
              { step: 2, title: "＝", desc: "ー" },
              { step: 3, title: "＝", desc: "ー" },
              { step: 4, title: "＝", desc: "ー" },
              { step: 5, title: "＝", desc: "ー" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 flex">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* 講師紹介 */}
       <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            講師紹介
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-3xl mx-auto">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/image/instructor.jpg" 
                alt="講師の写真" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">＝＝＝＝＝＝</h3>
              <p className="text-blue-600 font-medium mb-4 text-center md:text-left">肩書き</p>
              <p className="opacity-80 mb-4">
                実績
              </p>
              <p className="opacity-80 mb-4">
                実績
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            よくある質問
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "インスタグラムを始めたばかりでも大丈夫ですか？", a: "はい、初心者向けのカリキュラムから始めるので安心して受講いただけます。フォロワー0からでも成果を出せる方法をお伝えします。" },
              { q: "どのくらいの時間が必要ですか？", a: "週に3〜5時間程度の学習時間を確保いただくことをおすすめしています。講座で学ぶ効率的な運用方法を実践すれば、徐々に必要な時間は減っていきます。" },
              { q: "どんな商品やサービスでも売れるようになりますか？", a: "基本的にはどんな商品・サービスにも応用可能な手法をお伝えします。ただし、業種によって最適な戦略は異なるため、個別のアドバイスも提供しています。" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-blue-600">{item.q}</h3>
                <p className="opacity-80">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* クロージング */}
      <section className="py-16 px-5 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            今すぐ無料相談に申し込む
          </h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90">
            インスタグラムを使って自分の商品を効率的に販売し、ブランド価値を高める第一歩を踏み出しましょう。
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">
              期間限定！先着10名様限定特典付き
            </h3>
            <p className="opacity-80 mb-8">
              今なら「インスタ自動集客テンプレート100選」をプレゼント。この機会をお見逃しなく！
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors w-full">
              無料面談を今すぐ申し込む
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;