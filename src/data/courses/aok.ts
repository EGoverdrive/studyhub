import type { Course } from '../../types';

export const aokCourse: Course = {
  id: 'aok',
  code: 'IF234102',
  name: 'Arsitektur dan Organisasi Komputer',
  className: 'Kelas B',
  lecturer: 'Muchammad Husni',
  classroomUrl: 'https://classroom.its.ac.id/my/courses.php',
  description: 'Mempelajari hubungan struktural komponen perangkat keras komputer, representasi data digital tingkat rendah, unit pemrosesan sentral (CPU), sistem memori, hingga jalur input/output.',
  accentColor: 'from-amber-600 to-orange-600',
  badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  iconName: 'Cpu',
  topics: [
    {
      id: 'aok-m1',
      courseId: 'aok',
      title: 'Arsitektur Von Neumann vs Harvard & Struktur Bus',
      week: 1,
      estimatedMinutes: 25,
      summary: 'Perbedaan mendasar arsitektur Von Neumann (shared memory) vs Harvard (separate memory), struktur CPU, dan 3 jenis system bus.',
      sections: [
        {
          heading: '1. Model Komputer Von Neumann vs Harvard',
          content: 'Model **Von Neumann** menggunakan memori tunggal (shared memory) dan bus yang sama untuk instruksi program dan data. Hal ini memicu fenomena **Von Neumann Bottleneck** (kecepatan transfer data dibatasi oleh throughput bus). Sebaliknya, model **Harvard** memisahkan jalur bus dan memori fisik antara instruksi dan data, sehingga instruksi dan data dapat diakses secara simultan (banyak diadopsi pada mikroprosesor modern seperti ARM dan DSP).'
        },
        {
          heading: '2. Tiga Jenis Bus Sistem (System Bus)',
          content: 'Komunikasi antar CPU, memori, dan I/O dihubungkan oleh 3 bus utama:\n- **Address Bus**: Menentukan alamat fisik di memori yang ingin dibaca/ditulis (unidirectional dari CPU).\n- **Data Bus**: Mentransmisikan data aktual bolak-balik (bidirectional).\n- **Control Bus**: Mengirim sinyal kendali (Read, Write, Interrupt, Clock) untuk sinkronisasi.'
        }
      ],
      keyTakeaways: [
        'Von Neumann berbagi satu memori untuk data dan program; Harvard memisahkan memori instruksi dan data.',
        'Address bus bersifat searah (CPU -> Memory/IO), sedangkan Data bus bersifat dua arah (bidirectional).',
        'Von Neumann Bottleneck terjadi karena CPU modern jauh lebih cepat daripada kecepatan transfer memori bersama.'
      ]
    },
    {
      id: 'aok-m2',
      courseId: 'aok',
      title: 'Sistem Bilangan, Biner, Heksadesimal & Two\'s Complement',
      week: 2,
      estimatedMinutes: 30,
      summary: 'Konversi bilangan desimal, biner, hexadesimal, serta representasi bilangan bulat bertanda dengan Two\'s Complement.',
      sections: [
        {
          heading: '1. Konversi Bilangan & Bit/Nibble/Byte',
          content: '1 Byte = 8 bit. 1 Nibble = 4 bit = 1 digit Heksadesimal (0-9, A-F). Contoh: Biner `1101 1010` dikelompokkan per 4 bit: `1101` = 13 (D) dan `1010` = 10 (A), sehingga nilai hex-nya adalah `0xDA` (atau 218 dalam desimal).'
        },
        {
          heading: '2. Representasi Bilangan Negatif: Two\'s Complement',
          content: 'Dalam sistem digital modern, angka negatif disimpan dalam bentuk **Two\'s Complement** (Komplemen 2) karena memudahkan sirkuit ALU melakukan operasi pengurangan menggunakan penambah (adder) yang sama.\n\nLangkah mencari Two\'s Complement dari angka positif:\n1. Tulis bentuk biner dari nilai absolutnya.\n2. Invert semua bit (0 jadi 1, 1 jadi 0 -> One\'s Complement).\n3. Tambahkan 1 ke bit paling belakang (LSB).\n\nRentang angka $n$-bit bertanda two\'s complement adalah $-2^{n-1}$ hingga $2^{n-1} - 1$.',
          tips: 'Untuk 8-bit bertanda: rentang nilainya adalah -128 sampai +127. Angka -1 selalu direpresentasikan oleh 0xFF (1111 1111).'
        }
      ],
      keyTakeaways: [
        'Two\'s complement = Invert bit (NOT) + 1.',
        'Satu digit heksadesimal merepresentasikan tepat 4 digit biner (1 nibble).',
        'MSB (Most Significant Bit) bernilai 1 menunjukkan angka bernilai negatif pada sistem signed.'
      ]
    },
    {
      id: 'aok-m3',
      courseId: 'aok',
      title: 'Gerbang Logika Dasar & Rangkaian Digital',
      week: 3,
      estimatedMinutes: 30,
      summary: 'Tabel kebenaran AND, OR, NOT, NAND, NOR, XOR, XNOR, gerbang universal, dan half/full adder.',
      sections: [
        {
          heading: '1. Gerbang Logika & Gerbang Universal',
          content: 'Gerbang **NAND** dan **NOR** disebut sebagai **Universal Gates** karena kombinasi salah satu dari gerbang ini dapat mengimplementasikan SEMUA fungsi logika lainnya (AND, OR, NOT, XOR).\n- **XOR (Exclusive OR)**: Bernilai 1 jika jumlah input yang bernilai 1 adalah GANJIL (berguna untuk parity check dan penjumlahan bit adder).'
        },
        {
          heading: '2. Half Adder vs Full Adder',
          content: '- **Half Adder**: Menjumlahkan 2 bit input ($A, B$), menghasilkan Sum = $A \\oplus B$ dan Carry = $A \\cdot B$.\n- **Full Adder**: Menjumlahkan 3 bit input ($A, B$, dan $C_{in}$ dari stage sebelumnya), menghasilkan Sum = $A \\oplus B \\oplus C_{in}$ dan $C_{out} = (A \\cdot B) + (C_{in} \\cdot (A \\oplus B))$.'
        }
      ],
      keyTakeaways: [
        'NAND dan NOR adalah gerbang universal: semua fungsi logika dapat dibangun hanya dari NAND atau NOR.',
        'Half Adder tidak memperhitungkan Carry In; Full Adder menjumlahkan A, B, dan Carry In.',
        'Operasi XOR digunakan dalam penjumlahan bit karena Sum = A XOR B.'
      ]
    },
    {
      id: 'aok-m4',
      courseId: 'aok',
      title: 'Hirarki Memori, Cache L1/L2/L3 & Prinsip Lokalitas',
      week: 4,
      estimatedMinutes: 35,
      summary: 'Perbandingan kecepatan vs kapasitas register, cache, RAM, dan storage, serta prinsip Temporal & Spatial Locality.',
      sections: [
        {
          heading: '1. Prinsip Piramida Hirarki Memori',
          content: 'Hirarki memori dibangun berdasarkan trade-off antara kecepatan, kapasitas, dan biaya per bit:\n1. **Register CPU**: Tercepat (< 1 ns), termahal, kapasitas sangat kecil (beberapa ratus byte).\n2. **Cache (L1, L2, L3)**: Menggunakan SRAM (Static RAM), cepat (1 - 10 ns), terpasang dekat inti CPU.\n3. **Main Memory (RAM)**: Menggunakan DRAM (Dynamic RAM yang butuh refresh periodik), kapasitas gigabyte, latensi ~50-100 ns.\n4. **Secondary Storage (SSD NVMe / HDD)**: Non-volatile, kapasitas terabyte, relatif lambat (mikrodetik hingga milidetik).'
        },
        {
          heading: '2. Prinsip Lokalitas (Locality of Reference)',
          content: '- **Temporal Locality**: Jika suatu data baru saja diakses, kemungkinan besar data tersebut akan diakses kembali dalam waktu dekat (misal: variabel iterator dalam loop).\n- **Spatial Locality**: Jika suatu data diakses, alamat data di sekitarnya kemungkinan besar akan segera diakses (misal: elemen array berurutan).'
        }
      ],
      keyTakeaways: [
        'SRAM dipakai untuk Cache karena cepat dan tanpa sirkuit refresh; DRAM dipakai untuk RAM utama karena lebih padat dan murah.',
        'Temporal Locality: data yang sama diakses lagi; Spatial Locality: tetangga data diakses.',
        'Hit ratio tinggi menandakan mayoritas akses data berhasil dilayani langsung oleh cache tanpa perlu membaca RAM lambat.'
      ]
    },
    {
      id: 'aok-m5',
      courseId: 'aok',
      title: 'Siklus Instruksi CPU & Konsep Pipelining',
      week: 5,
      estimatedMinutes: 35,
      summary: 'Siklus Fetch-Decode-Execute, register PC, IR, MAR, MBR, serta peningkatan throughput instruksi dengan pipelining.',
      sections: [
        {
          heading: '1. Siklus Instruksi (Instruction Cycle)',
          content: 'Setiap instruksi mesin dieksekusi melalui tahapan:\n1. **Fetch**: CPU mengambil instruksi dari alamat memori yang ditunjuk oleh **Program Counter (PC)**, dimuat ke **Instruction Register (IR)**. PC di-increment.\n2. **Decode**: Control Unit menerjemahkan opcode instruksi dan mengidentifikasi operand.\n3. **Execute**: ALU atau subunit CPU mengeksekusi operasi aritmatika/logika atau transfer memori.'
        },
        {
          heading: '2. Pipelining & Pipeline Hazards',
          content: 'Pipelining memungkinkan beberapa instruksi berada pada tahapan pemrosesan yang berbeda secara simultan (analogi: lini perakitan pabrik).\n\n**Hambatan Pipeline (Pipeline Hazards)**:\n- **Structural Hazard**: Terjadi perebutan sumber daya perangkat keras pada siklus yang sama.\n- **Data Hazard**: Suatu instruksi membutuhkan hasil kalkulasi dari instruksi sebelumnya yang belum selesai dieksekusi.\n- **Control (Branch) Hazard**: Terjadi percabangan kondisional sehingga instruksi berikutnya belum pasti.'
        }
      ],
      keyTakeaways: [
        'Program Counter (PC) selalu menyimpan alamat instruksi berikutnya yang akan di-fetch.',
        'Instruction Register (IR) menyimpan kode biner instruksi yang sedang didecode.',
        'Pipelining meningkatkan throughput (bukan mempercepat waktu eksekusi satu instruksi tunggal).'
      ]
    }
  ],
  quizzes: [
    {
      id: 'aok-q1',
      courseId: 'aok',
      topicId: 'aok-m1',
      question: 'Manakah bus sistem pada komputer yang bersifat searah (unidirectional) dari arah CPU menuju memori atau perangkat I/O?',
      options: ['Data Bus', 'Address Bus', 'Control Bus', 'Peripheral Bus'],
      correctAnswer: 1,
      explanation: 'Address bus bersifat unidirectional karena hanya CPU (atau DMA controller) yang bertindak sebagai pemegang alamat tujuan pembacaan/penulisan memori.',
      hint: 'Bus yang bertugas menentukan "lokasi alamat mana" yang diakses.',
      difficulty: 'Mudah'
    },
    {
      id: 'aok-q2',
      courseId: 'aok',
      topicId: 'aok-m2',
      question: 'Berapakah representasi biner 8-bit Two\'s Complement dari bilangan desimal -5?',
      options: ['1000 0101', '1111 1010', '1111 1011', '1111 1101'],
      correctAnswer: 2,
      explanation: '+5 adalah 0000 0101. Invert semua bit (1s complement) = 1111 1010. Tambahkan 1 = 1111 1011.',
      hint: 'Invert bit dari +5 lalu tambahkan 1 ke bit terakhir.',
      difficulty: 'Sedang'
    },
    {
      id: 'aok-q3',
      courseId: 'aok',
      topicId: 'aok-m3',
      question: 'Mengapa gerbang NAND dan NOR digolongkan sebagai "Gerbang Universal" (Universal Logic Gates)?',
      options: [
        'Karena hanya butuh daya listrik paling kecil',
        'Karena dapat digunakan untuk membentuk seluruh fungsi logika digital lainnya tanpa gerbang lain',
        'Karena memiliki kecepatan switching paling tinggi di dunia',
        'Karena dapat menerima input analog maupun digital'
      ],
      correctAnswer: 1,
      explanation: 'Gerbang logika universal (NAND dan NOR) memiliki sifat kelengkapan fungsional, artinya fungsi logika apapun (AND, OR, NOT, XOR, dll.) dapat disusun sepenuhnya hanya menggunakan gerbang tersebut.',
      hint: 'Fungsional lengkap untuk semua logika digital.',
      difficulty: 'Mudah'
    },
    {
      id: 'aok-q4',
      courseId: 'aok',
      topicId: 'aok-m4',
      question: 'Fenomena ketika suatu program membaca elemen array secara berurutan dalam loop (misal arr[0], arr[1], arr[2]) merupakan manifestasi dari:',
      options: ['Temporal Locality', 'Spatial Locality', 'Von Neumann Bottleneck', 'Pipelining Hazard'],
      correctAnswer: 1,
      explanation: 'Spatial locality adalah kecenderungan program untuk segera mengakses lokasi memori yang letaknya berdekatan secara fisik dengan lokasi yang baru saja diakses.',
      hint: 'Lokalitas yang berhubungan dengan ruang fisik alamat memori bertetangga.',
      difficulty: 'Sedang'
    },
    {
      id: 'aok-q5',
      courseId: 'aok',
      topicId: 'aok-m5',
      question: 'Register khusus di dalam CPU yang bertugas menyimpan alamat instruksi berikutnya yang akan diambil (fetch) dari memori adalah:',
      options: ['Instruction Register (IR)', 'Accumulator (ACC)', 'Program Counter (PC)', 'Memory Buffer Register (MBR)'],
      correctAnswer: 2,
      explanation: 'Program Counter (PC) bertindak sebagai pencatat nomor baris instruksi berikutnya yang akan dieksekusi, dan otomatis bertambah (increment) setiap siklus fetch selesai.',
      hint: 'Penghitung langkah urutan instruksi program.',
      difficulty: 'Mudah'
    }
  ],
  flashcards: [
    {
      id: 'aok-fc1',
      courseId: 'aok',
      topicId: 'aok-m1',
      category: 'Arsitektur',
      front: 'Apa itu "Von Neumann Bottleneck"?',
      back: 'Keterbatasan throughput sistem komputer di mana CPU yang sangat cepat harus menunggu transfer data/instruksi yang lambat karena keduanya harus berbagi satu bus memori yang sama.',
      exampleOrNote: 'Diatasi modern dengan cache bertingkat (L1, L2, L3) dan arsitektur memori Harvard yang terpisah.'
    },
    {
      id: 'aok-fc2',
      courseId: 'aok',
      topicId: 'aok-m2',
      category: 'Sistem Bilangan',
      front: 'Berapa rentang nilai integer bertanda 8-bit (signed byte) dalam format Two\'s Complement?',
      back: 'Rentangnya adalah -128 hingga +127 (atau $-2^{7}$ sampai $2^7 - 1$).',
      exampleOrNote: '0x7F = +127, 0x80 = -128, 0xFF = -1.'
    },
    {
      id: 'aok-fc3',
      courseId: 'aok',
      topicId: 'aok-m4',
      category: 'Memori',
      front: 'Apa perbedaan mendasar teknologi SRAM (Static RAM) dan DRAM (Dynamic RAM)?',
      back: 'SRAM menggunakan transistor latch (flip-flop), sangat cepat, tidak butuh refresh berkala, mahal -> dipakai untuk Cache. DRAM menggunakan kombinasi transistor-kapasitor kecil, muatan bocor sehingga butuh refresh berkala, murah dan padat -> dipakai untuk RAM utama.',
      exampleOrNote: 'SRAM = Cache L1/L2/L3. DRAM = DDR4 / DDR5 RAM.'
    },
    {
      id: 'aok-fc4',
      courseId: 'aok',
      topicId: 'aok-m5',
      category: 'Pipelining',
      front: 'Sebutkan 3 jenis Pipeline Hazard!',
      back: '1. Structural Hazard (konflik hardware),\n2. Data Hazard (RAW: Read After Write, dependency data),\n3. Control Hazard (akibat instruksi branch/jump).',
      exampleOrNote: 'Diatasi dengan forwarding, branch prediction, dan stalling (bubble).'
    }
  ],
  cheatsheets: [
    {
      id: 'aok-cs1',
      courseId: 'aok',
      title: 'Tabel Konversi Biner, Heksadesimal & Desimal (0-15)',
      category: 'Representasi Bilangan',
      content: '0000 = 0x0 = 0 | 0001 = 0x1 = 1 | 0010 = 0x2 = 2 | 0011 = 0x3 = 3\n0100 = 0x4 = 4 | 0101 = 0x5 = 5 | 0110 = 0x6 = 6 | 0111 = 0x7 = 7\n1000 = 0x8 = 8 | 1001 = 0x9 = 9 | 1010 = 0xA = 10 | 1011 = 0xB = 11\n1100 = 0xC = 12 | 1101 = 0xD = 13 | 1110 = 0xE = 14 | 1111 = 0xF = 15',
      tags: ['biner', 'heksadesimal', 'nibble', 'konversi']
    },
    {
      id: 'aok-cs2',
      courseId: 'aok',
      title: 'Rumus Two\'s Complement & Rentang Nilai n-Bit',
      category: 'Aritmatika Digital',
      content: 'Rentang Signed n-bit: [-2^(n-1), 2^(n-1) - 1]\nLangkah mencari -X:\n1. Tulis biner positif X\n2. Invert semua bit (NOT)\n3. Tambah 1\nContoh 8-bit -1: NOT(0000 0001) = 1111 1110 + 1 = 1111 1111 (0xFF)',
      formula: 'X_{twos} = \\overline{X} + 1',
      tags: ['twos complement', 'signed', 'biner', 'rumus']
    },
    {
      id: 'aok-cs3',
      courseId: 'aok',
      title: 'Fungsi Register Kunci pada CPU',
      category: 'CPU Registers',
      content: '- PC (Program Counter): Alamat memori instruksi berikutnya\n- IR (Instruction Register): Menyimpan biner instruksi yang dieksekusi\n- MAR (Memory Address Register): Alamat fisik bus memori\n- MBR / MDR (Memory Buffer/Data Register): Data dibaca/ditulis ke bus\n- SP (Stack Pointer): Alamat top of stack\n- FLAGS / PSW: Menyimpan status Zero (Z), Carry (C), Sign (S), Overflow (V)',
      tags: ['register', 'cpu', 'pc', 'ir', 'mar', 'mbr']
    }
  ]
};
