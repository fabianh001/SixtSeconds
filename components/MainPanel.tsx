import BookForm from './BookForm';

export default function MainPanel() {
    return (
        <div className='z-10 -mt-6 p-4 bg-base-100 rounded-t-3xl shadow-lg flex-1 flex flex-col items-stretch'>
            <BookForm />
        </div>
    )
}